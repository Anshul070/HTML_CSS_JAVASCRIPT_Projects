var questions = document.getElementById("question");
var buttons = document.getElementById("buttons");
var score = document.getElementById("score");
var questionIndex = 0;
var scoreCount = 0;
var Timer = 30;

var questionList = [
    {
        question: "Worst country in the world?",
        options: ["Canada", "England", "Pakistan", "Russia"],
        correctAnswer: "Pakistan"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1921", "1922", "1918"],
        correctAnswer: "1912"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "What is the largest ocean on the Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "What is the currency of Germany?",
        options: ["Euro", "Poudn Sterling", "Yen", "Mark"],
        correctAnswer: "Euro"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosa Parks", "Amelia Earhart", "Mother Teresa"],
        correctAnswer: "Marie Curie"
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Venus", "Mercury", "Mars", "Jupiter"],
        correctAnswer: "Venus"
    }
];
loadQuestion();
function loadQuestion() {
    if (questionIndex === questionList.length) {
        questions.innerHTML = "Quiz Completed"
    }
    questions.innerHTML = `${questionList[questionIndex].question} <br> <span>Counter :${Timer}</span>`;
    var counter = setInterval(() => {
        Timer--;
        questions.innerHTML = `${questionList[questionIndex].question} <br> <span>Counter :${Timer}</span>`;
    }, 1000);
    var CounterTIMEOUT = setTimeout(() => {
        clearInterval(counter);
        Timer = 30;
        questionIndex++;
        buttons.innerHTML = "";
        loadQuestion();
    }, 30000);
    questionList[questionIndex].options.forEach((option, index) => {
        var button = document.createElement("input");
        button.type = "button";
        button.value = option;
        button.className = "optionButton";
        button.addEventListener("click", (e) => {
            checkAnswer(option, questionList[questionIndex].correctAnswer, counter, CounterTIMEOUT);

        })
        buttons.appendChild(button);
    });
}
function checkAnswer(selectedAnswer, correctAnswer, counter, CounterTIMEOUT) {
    if (selectedAnswer === correctAnswer) {
        scoreCount++
        score.innerHTML = `Scroe : ${scoreCount}`
    }
    questionIndex++
    Timer = 30;
    clearInterval(counter);
    console.log(counter);
    clearTimeout(CounterTIMEOUT);
    buttons.innerHTML = "";
    loadQuestion();
}