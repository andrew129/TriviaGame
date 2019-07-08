let intervalId;
let seconds = 30;
let correctAnswers = 0
let incorrectAnswers = 0
let count = 0
let questions = [];
let correctAnswersArray = [];
let quiz = [
{
    question: "Lin Wang holds the Guinness World Record for oldest elephant. How long did he live?",
    answers: ["17 years", "49 years", "86 years", "142 years"],
    correctAnswer: "86 years"
},

{
    question: "How many rings are on the Olympic flag?",
    answers: ["0", "4", "5", "7"],
    correctAnswer: "5"
},

{
    question: "What is a tarsier?",
    answers: ["primate", "rodent", "lizard", "bird"],
    correctAnswer: "primate"
},

{
    question: "How did Spider-Man get his powers?",
    answers: ["military experiment", "born with them", "woke up with them after a strange dream", "bitten by a radioactive spider"],
    correctAnswer: "bitten by a radioactive spider"
},

{
    question: "In darts, what's the most points you can score with a single throw?",
    answers: ["20", "50", "60", "100"],
    correctAnswer: "60"
}
]
//references to html//
let timeRemaining = $("#time-remaining");
let questionHtml = $("#question");
let answerOne = $("#answerone");
let answerTwo = $("#answertwo");
let answerThree = $("#answerthree");
let answerFour = $("#answerfour");
let timeOut = $("#time-up");
let start = $("#start")
//initial text//
//timer on page//
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

function restart() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
    seconds;
}

function decrement() {
    seconds--;
    timeRemaining.text("time remaining: " + seconds);
    if (seconds === 0) {
        stop() 
        $("#time-up").text("Time's Up");
        nextQuestion();
        displayAnswers();
    }
}

function stop() {
    clearInterval(intervalId);
}

$("#startbtn").on("click", run)

$("#startbtn").on("click", function() {
    $("#startbtn").remove();
    displayQuestion();
    displayAnswers()
})
//questions and answers on page//
function displayQuestion() {
    for (let i = 0; i < quiz.length; i++) {
    questions.push(quiz[i].question);
    console.log(quiz.length)
    $("#question").text(questions[count]);
    }
}

function nextQuestion() {
    run()
    count++
    $("#question").text(questions[count]);
    for (let j = 0; j < quiz.length; j++) {
        if (count === quiz.length) {
            stop()
            $("#start-over").text("Start Over?");
            count = 0
        }
    }}
function displayAnswers() {
    $("#answerone").text(quiz[count].answers[0]);
    $("#answertwo").text(quiz[count].answers[1]);
    $("#answerthree").text(quiz[count].answers[2]);
    $("#answerfour").text(quiz[count].answers[3]);
}
//push correctAnswers to its own array//
for (let k = 0; k < quiz.length; k++) {
    correctAnswersArray.push(quiz[i].correctAnswer)
    console.log(correctAnswersArray)
}
//onclick//
$("#answerone").on("click", function() {
    restart()
    nextQuestion()
    displayAnswers()
            if (answerOne === quiz[i].correctAnswer) {
                $("#statement").text("Well Done!!!")
                correctAnswers++;
            }
            else {
                $("#statement").text("You Suck")
                incorrectAnswers++;
            }
        }
    )

$("#answertwo").on("click", function() {
    restart()
    nextQuestion()
    displayAnswers()
            if (answerTwo === quiz[i].correctAnswer) {
                $("#statement").text("Well Done!!!")
                correctAnswers++;
            }
            else {
                $("#statement").text("You Suck")
                incorrectAnswers++;
                }
            }
        )


$("#answerthree").on("click", function() {
    restart()
    nextQuestion()
    displayAnswers()
            if (answerThree === quiz[i].correctAnswer) {
                $("#statement").text("Well Done!!!")
                correctAnswers++;
            }
            else {
                $("#statement").text("You Suck")
                incorrectAnswers++;
                }
            }
        )

$("#answerfour").on("click", function() {
    restart()
    nextQuestion()
    displayAnswers()
            if (answerFour === quiz[i].correctAnswer) {
                $("#statement").text("Well Done!!!")
                correctAnswers++;
            }
            else {
                $("#statement").text("You Suck")
                incorrectAnswers++;
                }
            }
        )
    






