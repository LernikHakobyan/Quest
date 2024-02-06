let questions = [
    "What is the correct way to declare a variable in JavaScript?",
    "Which of the following is not a primitive data type in JavaScript?",
    "What is the purpose of the === operator in JavaScript?",
    "What method is used to add a new element to the end of an array in JavaScript?",
    "What is the result of typeof null in JavaScript?",
    "Which event occurs when a user clicks on an HTML element?",
    "How do you write a single-line comment in JavaScript?",
    "What is the correct syntax for a for loop in JavaScript?",
    "Which function is used to parse a JSON string in JavaScript?",
    "What does the NaN property represent in JavaScript?",
    "How can you check if a variable is an array in JavaScript?",
    "Which method is used to remove the last element from an array in JavaScript?",
    "What is the purpose of the setTimeout() function in JavaScript?",
    "Which keyword is used to declare a block scope variable in JavaScript?",
    "How do you convert a string to lowercase in JavaScript?",
    "Which of the following methods can be used to add elements to the beginning of an array in JavaScript?",
    "In JavaScript, which of the following statements are true about arrow functions?",
    "When comparing two objects in JavaScript using the == operator, which statements are true?",
    "Which of the following are valid ways to declare a JavaScript array?",
    "In JavaScript, which statements are true about the this keyword?"
];
let answers = [{
        a: ["var myVar", true],
        b: ["let myVar", false],
        c: ["const myVar", false],
        d: ["all of the above", false],
        count: 1
    },

    {
        a: ["string", false],
        b: ["number", false],
        c: ["array", true],
        d: ["boolean", false],
        count: 1
    },

    {
        a: ["It checks for strict equality without type conversion.", true],
        b: ["It assigns a value to a variable.", false],
        c: ["It concatenates two strings.", false],
        d: ["It performs a bitwise operation.", false],
        count: 1
    },

    {
        a: ["push()", true],
        b: ["pop()", false],
        c: ["shift()", false],
        d: ["unshift()", false],
        count: 1
    },

    {
        a: ['"null"', false],
        b: ['"object"', true],
        c: ['"undefined"', false],
        d: ['"boolean"', false],
        count: 1
    },

    {
        a: ["onclick", true],
        b: ["onmouseover", false],
        c: ["onkeydown", false],
        d: ["onsubmit", false],
        count: 1
    },

    {
        a: ["<!-- comment -->", false],
        b: ["// comment", true],
        c: ["/* comment */", false],
        d: ["** comment **", false],
        count: 1
    },

    {
        a: ["for (i = 0; i < 5; i++)", true],
        b: ["for (i < 5; i++)", false],
        c: ["for (i = 0; i < 5)", false],
        d: ["for (i = 0; i++; i < 5)", false],
        count: 1
    },

    {
        a: ["JSON.stringify()", false],
        b: ["JSON.parse()", true],
        c: ["JSON.stringifyify()", false],
        d: ["JSON.parseJSON()", false],
        count: 1
    },

    {
        a: ['"Not a Node"', false],
        b: ['"Null and Negative"', false],
        c: ['"Not a Number"', true],
        d: ['"No Absolute Number"', false],
        count: 1
    },

    {
        a: ["Using the typeof operator", false],
        b: ["Using the isArray() method", true],
        c: ["Using the isArr() function", false],
        d: ["Using the Array() constructor", false],
        count: 1
    },

    {
        a: ["slice()", false],
        b: ["pop()", true],
        c: ["shift()", false],
        d: ["unshift()", false],
        count: 1
    },

    {
        a: ["It delays the execution of a function by a specified amount of time.", true],
        b: ["It sets an interval for executing a function repeatedly.", false],
        c: ["It executes a function immediately.", false],
        d: ["It stops the execution of a function.", false],
        count: 1
    },

    {
        a: ["block", false],
        b: ["scope", false],
        c: ["let", true],
        d: ["var", false],
        count: 1
    },

    {
        a: ["toLowerCase()", true],
        b: ["lowerCase()", false],
        c: ["toLower()", false],
        d: ["convertLower()", false],
        count: 1
    },

    {
        a: ["unshift()", true],
        b: ["push()", false],
        c: ["concat()", false],
        d: ["splice()", true],
        count: 2
    },

    {
        a: ["They lexically bind the this value.", true],
        b: ["They cannot be used as constructors.", false],
        c: ["They have implicit return when the function body is a single expression.", true],
        d: ["They can be defined using the function keyword.", false],
        count: 2
    },

    {
        a: ["It compares the references, not the actual content of the objects.", true],
        b: ["If both objects have the same properties and values, they are considered equal.", true],
        c: ["It returns true if both objects are referencing the same memory location.", false],
        d: ["It returns false even if the objects have the same properties and values but are different instances.", false],
        count: 2
    },

    {
        a: ["let arr = []", true],
        b: ["let arr = new Array()", false],
        c: ["let arr = [1, 2, 3]", true],
        d: ["let arr = Array(5)", false],
        count: 2
    },

    {
        a: ["It refers to the global object in the absence of an explicit context.", true],
        b: ["It refers to the object that is executing the current function.", false],
        c: ["It can be explicitly set using bind(), call(), or apply().", true],
        d: ["It behaves differently in arrow functions compared to regular functions", false],
        count: 2
    }


]

//------------- For random checker data -------------//

    let questionSet = new Set();

//---------------------------------------------------//



//---------- Geting increment number for question via closure ----------//

    function randomCallCounter() {
        let a = -1;
        return () => {

            return ++a;
        }
    }

    let questionNumber = randomCallCounter()

//----------------------------------------------------------------------//



//----------- Closure function for increment question Number -----------//

    function trueAnswersCounter(){
        let a = 0;
        return (bool) => {
            if(!bool){
                a += 0.5;
                return a
            }
            return ++a;
        }
    }

    let trueAnswer = trueAnswersCounter()

//----------------------------------------------------------------------//



//---------- Geting random number for questions and answers ------------//

    function randomQuestion() {
        let num = Math.floor(Math.random() * questions.length);
        if(questionSet.has(Number(num))){
            return randomQuestion()
        }
        questionSet.add(num);
        //console.log(`A ----> ${num}`)
        return [num, questionNumber()];
    }

//----------------------------------------------------------------------//

//----------------- One heart remover with selected id -----------------//

    function removeHeart(allHearts,allId){
        let item = allHearts.indexOf(true);
        if (item !== -1) {
            //console.log(item)
            let choosenHeart = allId[item];
            choosenHeart.style.opacity = 0.2;
            allHearts[item] = false;

        }
        return allHearts;
    }

//----------------------------------------------------------------------//



//---------- Geting random number for questions and answers ------------//

    function changeBut(name){
        if(document.getElementById(name).checked ){
            document.getElementById(name).checked = false;
        }else{
            document.getElementById(name).checked = true;
        }
        
    }

//----------------------------------------------------------------------//



//---------- {Loosing/winning/Endgame} changes in HTML/CSS ------------//

    function EndGame(){
        document.getElementById("background_quest_img").style.backgroundPosition = "right";
        document.getElementById("disabled").style.pointerEvents = "all"
        document.getElementById("form_quest").style.display = "none";
        document.getElementById("time").style.display = "none";
    }

    function loose(){
        document.getElementById("background_quest_img").style.backgroundImage = 'url("../Code/images/loose1.png")';
        document.getElementById("question_text").innerText = "Sorry. You loose.Click on me for replay!";
        EndGame()
    }

    function win(){
        document.getElementById("background_quest_img").style.backgroundImage = 'url("../Code/images/win.png")';
        document.getElementById("question_text").innerText = "You Win. Click on me for replay!";
        EndGame()
    }

//---------------------------------------------------------------------//
//---------------------------------------------------------------------//
//---------------------------------------------------------------------//
//---------------------------------------------------------------------//

//----------------------- Starting our main function -----------------------//

    function main() {
        let generated = randomQuestion();
        let scores = 0;

        let timer = NaN;
        let func1 = NaN;
        let func = NaN;

        let allTime = 30;
    
        let allHearts = [true,true,true];
        let idHearts = [document.getElementById("heart_back_1"),document.getElementById("heart_back_2"),document.getElementById("heart_back_3")]

        return {

            //---------- Function for display updating ----------//

                generateQuest: function () {

                    document.getElementById("timer").innerText = allTime; // Update the question text

                    //----------------- Main Timer decrement function -----------------//

                        function mainTimer(){
                                func1 = setInterval(()=>{
                                    allTime--;
                                    document.getElementById("timer").innerText = allTime;
                                    if(allTime <= 0){
                                        allTime = NaN;
                                        loose()
                                        clearInterval(func1);
                                    }
                                },1000)
                        }

                    //------------------------------------------------------------//

                    //----------------- Question Timer decrement function -----------------//

                        timer = 10;
                        func = setInterval(() => {
                            timer--;
                            document.getElementById("timer_question").innerText = timer; // Update the question text
                            if (timer <= 0) {
                                mainTimer();
                                clearInterval(func);
                            }else{
                                clearInterval(func1)
                            }
                        }, 1000)

                    //----------------------------------------------------------------------//



                    //----------------------------------------------------------------------//

                        document.getElementById("timer_question").innerText = timer; // Update the question text
                        document.getElementById("myForm").reset();                   // Reset Form checkboxes
                        generated = randomQuestion();                                // Generate a new random question and its corresponding answer choices

                        document.getElementById("score_counter").innerText = scores; // Update the question text
                    
                    //----------------------------------------------------------------------//



                    //----------------- The only Win case checker -----------------//

                        if(generated[1] > 10){
                            allTime = NaN;
                            scores += allHearts.filter((val)=>val).length * 3;
                            document.getElementById("score_counter").innerText = scores;
                            win()
                            return;
                        }

                    //-------------------------------------------------------------//



                    //----------------- Rewrite Question/Answers -----------------//

                        document.getElementById("num").innerText = generated[1]; // Update the question number
                        document.getElementById("main_question").innerText = questions[generated[0]]; // Update the question text
                        document.getElementById("checkbox_text1").innerText = answers[generated[0]].a[0]; // Update the answer choice text for checkbox 1
                        document.getElementById("checkbox_text2").innerText = answers[generated[0]].b[0]; // Update the answer choice text for checkbox 2
                        document.getElementById("checkbox_text3").innerText = answers[generated[0]].c[0]; // Update the answer choice text for checkbox 3
                        document.getElementById("checkbox_text4").innerText = answers[generated[0]].d[0]; // Update the answer choice text for checkbox 4

                    //------------------------------------------------------------//

                },

            //------------------------------------------------------------//

            //---------- For checking results and updating page ----------//

                checker: function () { 
                    clearInterval(func)                      //Clearing interval previous question's timer
                    let many = answers[generated[0]].count  //How many true answers the current question has
                    let trueAnswers = 0;                    //How many true answers we got
                    let checked = [document.getElementById("answer1").checked, document.getElementById("answer2").checked, document.getElementById("answer3").checked, document.getElementById("answer4").checked]; //Checked checkboxes (true/false)
                    
                    //----------------- Getting all true answers for the current question -----------------//

                        let truePoints = [];                    
                        for (let key in answers[generated[0]]) {
                            if (answers[generated[0]][key][1] === true) {
                                truePoints.push(true);
                            } else if (answers[generated[0]][key][1] === false) {
                                truePoints.push(false);
                                
                            }
                        }

                    //-------------------------------------------------------------------------------------//

                    //----------------- Checking User's answers and true answers -----------------//
                    
                        for (let i = 0; i < checked.length; i++) {
                            if (checked[i] === true && truePoints[i] === true) {  //Increment my trueAnswers count if get true
                                trueAnswers++  
                            } else if (checked[i] === true && truePoints[i] === false) {
                                allHearts = removeHeart(allHearts,idHearts);
                                if(allHearts.indexOf(true) === -1){               //If loose all hearts call function loose and return for ending whole programm
                                    loose()
                                    return
                                }
                                //False answer 
                                this.generateQuest()
                                return 
                            }
                        }
                
                    //----------------------------------------------------------------------------//
                
                    if (trueAnswers === 0) {                            //No one checkbox was choosen 
                        allHearts = removeHeart(allHearts,idHearts);
                        if(allHearts.indexOf(true) === -1){
                            loose()
                            return
                        }
                    } else if (trueAnswers < many) {                    //Not all true answers was found
                        scores = trueAnswer(false);
                    } else if (trueAnswers === many) {                  //All true answers were found
                        scores = trueAnswer(true);
                        allTime += timer;
                    }
                    
                    this.generateQuest()                                //Calling again like a cycle
                }

            //------------------------------------------------------------//

        }
    }

    let quiz = main()
    quiz.generateQuest()


//------------------------ End of our main function ------------------------//