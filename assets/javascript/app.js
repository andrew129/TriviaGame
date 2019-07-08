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
//timer on page//
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
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
    count++
    $("#statement").text("");
    $("#question").text(questions[count]);
        if (count === 5) {
            stop()
            $("#time-remaining").remove()
            $("#start-over").text("Start Over?");
            $("#answerone").remove()
            $("#answertwo").remove()
            $("#answerthree").remove()
            $("#answerfour").remove()
            $("#question").remove()
            $("#correctanswerdiv").text("correct Answers: " + correctAnswers)
            $("#incorrectanswerdiv").text("incorrect Answers: " + incorrectAnswers)
        }
    }

function displayAnswers() {
    $("#answerone").text(quiz[count].answers[0]);
    $("#answertwo").text(quiz[count].answers[1]);
    $("#answerthree").text(quiz[count].answers[2]);
    $("#answerfour").text(quiz[count].answers[3]);
}
//push correctAnswers to its own array//
for (let k = 0; k < quiz.length; k++) {
    correctAnswersArray.push(quiz[k].correctAnswer)
    console.log(correctAnswersArray)
}
//onclick//
$("#answerone").on("click", function() {
    nextQuestion()
    displayAnswers()
            if (answerOne === quiz[count].correctAnswer) {
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
    nextQuestion()
    displayAnswers()
            if (answerTwo === quiz[count].correctAnswer) {
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
    nextQuestion()
    displayAnswers()
            if (answerThree === quiz[count].correctAnswer) {
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
    nextQuestion()
    displayAnswers()
            if (answerFour === quiz[count].correctAnswer) {
                $("#statement").text("Correct!!!")
                correctAnswers++;
            }
            else {
                $("#statement").text("You Suck")
                incorrectAnswers++;
                }
            }
        )
//reset function//






