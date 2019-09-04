let intervalId;
let correctAnswers = 0
let incorrectAnswers = 0
let count = 0
let seconds;
let questions = [];
let imgDisplay = $('<img>').addClass('ans-img mx-auto');
// let images = [];
let answers = [];
let correctAnswersArray = [];
let quiz = [
{
    question: "Lin Wang holds the Guinness World Record for oldest elephant. How long did he live?",
    answers: ["17 years", "49 years", "86 years", "142 years"],
    correctAnswer: "86 years",
    image: "assets/images/elephants.jpg" 
},

{
    question: "How many heart chambers does a cockroach have?",
    answers: ["0", "12", "5", "7"],
    correctAnswer: "12",
    image: "assets/images/cockroach.jpg"
},

{
    question: "What is a tarsier?",
    answers: ["primate", "rodent", "lizard", "bird"],
    correctAnswer: "primate",
    image: "assets/images/tarsier.jpg"
},

{
    question: "what is the smallest fish in the world?",
    answers: ["paedocypris progenetica", "mangocypris tygenetica", "tanticacupris", "none of these"],
    correctAnswer: "paedocypris progenetica",
    image: "assets/images/minnow.jpg"
},

{
    question: "How many kills on average does a male lion make in a year?",
    answers: ["60", "50", "20", "100"],
    correctAnswer: "20",
    image: "assets/images/lion.jpg"
},

{
    question: "What is a group of kangaroos called?",
    answers: ["joey", "pack", "gang", "mob"],
    correctAnswer: "mob",
    image: "assets/images/kangaroo.jpg"
},

{
    question: "What key does a housefly hum in?",
    answers: ["D minor", "D major", "F major", "F minor"],
    correctAnswer: "F major",
    image: "assets/image/fly.jpg"
},

{
    question: "What animal was trained to drop bombs in WW2?",
    answers: ["crow", "bat", "pigeon", "eagle"],
    correctAnswer: "bat",
    image: "assets/images/bomb1.png"
},

{
    question: "What common body part do ants not have?",
    answers: ["heart", "lungs", "ears", "none of these"],
    correctAnswer: "lungs",
    image: "assets/images/ant.jpg"
},

{
    question: "the Allies dropped their first bomb on which animal accidentally?",
    answers: ["lion", "pig", "elephant", "flamingo"],
    correctAnswer: "elephant",
    image: "assets/images/bomb2.jpg"
},
]
//references to html//
let timeRemaining = $("#time-remaining");
let questionHtml = $("#question");
let timeOut = $("#time-up");
let start = $("#start")
//timer on page//
function run() {
    seconds = 10;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

function decrement() {
    seconds--;
    timeRemaining.text("time remaining: " + seconds);
    if (seconds === 0) {
        remover();
        delay()
        stop() 
        $("#time-up").text("Time's Up!!!");
        $("#time-remaining").text("")
    }
}

function stop() {
    clearInterval(intervalId);
}
//start button//

$("#startbtn").on("click", function() {
    $('#results').empty()
    run()
    $("#start-over").empty();
    $("#startbtn").remove();
    $("#directions").empty()
    displayQuestion();
    displayAnswers()
    displayImages();
})
//questions and answers on page//
function displayQuestion() {
    for (let i = 0; i < quiz.length; i++) {
    questions.push(quiz[i].question);
    console.log(quiz.length)
    $("#question").text(questions[count]);
    }
}

function displayImages() {
    imgDisplay.attr("src", quiz[count].image);
    $('#image').append(imgDisplay)
}

function nextQuestion() {
    run()
    $("#time-remaining").text("time remaining: " + seconds)
    $("#statement").empty();
    $("#time-up").text("");
    count++
    $("#question").text(questions[count]);
    console.log(count)
    if (count === 10) {
        stop()
        $("#time-remaining").empty()
        let startOver = $('<button>')
        startOver.text('Start Over?')
        startOver.attr('class', 'btn btn-primary')
        $('#start-over').append(startOver)
        $("#answerone").empty()
        $("#answertwo").empty()
        $("#answerthree").empty()
        $("#answerfour").empty()
        $("#question").empty()
        $("#statement").empty()
        $("#correctanswerdiv").text("correct Answers: " + correctAnswers)
        $("#incorrectanswerdiv").text("incorrect Answers: " + incorrectAnswers)
        $("#results").text("results");
        $('#image').empty()
    }
}

function displayAnswers() {
    let answerOne = $("<button>")
    let answerTwo = $("<button>")
    let answerThree = $("<button>")
    let answerFour = $("<button>")
    answerOne.text(quiz[count].answers[0])
    answerTwo.text(quiz[count].answers[1])
    answerThree.text(quiz[count].answers[2])
    answerFour.text(quiz[count].answers[3])
    answerOne.attr("class", "btn btn-primary")
    answerTwo.attr("class", "btn btn-primary")
    answerThree.attr("class", "btn btn-primary")
    answerFour.attr("class", "btn btn-primary")
    $("#answerone").append(answerOne)
    $("#answertwo").append(answerTwo)
    $("#answerthree").append(answerThree)
    $("#answerfour").append(answerFour)
}

function remover() {
    $('#directions').text("");
    $('#question').empty()
    $('#time-remaining').empty()
    $('#image').empty()
    $("#answerone").empty();
    $("#answertwo").empty();
    $("#answerthree").empty();
    $("#answerfour").empty();
}

//delay functions//
function delay() {
    setTimeout(nextQuestion, 1000)
    setTimeout(displayAnswers, 1000)
    setTimeout(displayImages, 1000)
}
//push correctAnswers to its own array//
for (let k = 0; k < quiz.length; k++) {
    correctAnswersArray.push(quiz[k].correctAnswer)
}
console.log(correctAnswersArray);
//onclick//
$("#answerone").on("click", function() {
    delay()
    remover()
    if (correctAnswersArray.includes(quiz[count].answers[0])) {
        $("#statement").text("Correct!!!")
        correctAnswers++;
    }
    else {
        console.log("this is wrong")
        $("#statement").text("You're Wrong")
        incorrectAnswers++;
    }
    $("#image").empty()
});

$("#answertwo").on("click", function() {
    delay()
    remover()
    if (correctAnswersArray.includes(quiz[count].answers[1])) {
        $("#statement").text("Correct!!!")
        correctAnswers++;
    }
    else {
        $("#statement").text("Wrong Answer")
        incorrectAnswers++;
    }
    $('#image').empty()
});

$("#answerthree").on("click", function() {
    delay()
    remover()
    if (correctAnswersArray.includes(quiz[count].answers[2])) {
        $("#statement").text("Correct!!!")
        correctAnswers++;
    }
    else {
        $("#statement").text("Wrong Answer")
        incorrectAnswers++;
    }
    $('#image').empty()
});

$("#answerfour").on("click", function() {
    delay()
    remover()
    if (correctAnswersArray.includes(quiz[count].answers[3])) {
        $("#statement").text("Correct!!!")
        correctAnswers++;
    }
    else {
        $("#statement").text("Wrong Answer")
        incorrectAnswers++;
    }
    $('#image').empty()
});
//reset function//
function reset() {
    run()
    count=0;
    displayQuestion()
    displayAnswers()
    displayImages();
}

$("#start-over").on("click", function() {
    reset();
})




