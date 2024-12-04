// Városliget Quiz kérdések és válaszok
const questions = [
    {
        question: "Melyik évben nyitották meg hivatalosan a Városligetet?",
        options: ["1813", "1839", "1896", "1920"],
        answer: 0 // Helyes válasz indexe
    },
    {
        question: "Milyen híres épület található a Városligetben?",
        options: ["Parlament", "Vajdahunyad vára", "Szépművészeti Múzeum", "Budavári Palota"],
        answer: 1
    },
    {
        question: "Melyik tó található a Városligetben?",
        options: ["Naplás-tó", "Feneketlen-tó", "Városligeti-tó", "Velencei-tó"],
        answer: 2
    }
];

// Quiz állapot
let currentQuestionIndex = 0;
let score = 0;

// HTML elemek
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-question");
const resultElement = document.getElementById("result");

// Kérdés megjelenítése
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
    nextButton.style.display = "none";
}

// Válasz ellenőrzése
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++;
        resultElement.textContent = "Helyes válasz!";
    } else {
        resultElement.textContent = "Helytelen válasz!";
    }
    nextButton.style.display = "inline-block";
}

// Következő kérdés
nextButton.onclick = () => {
    currentQuestionIndex++;
    resultElement.textContent = "";
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
};

// Quiz vége
function endQuiz() {
    questionElement.textContent = "Gratulálok, befejezted a quizt!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    resultElement.textContent = `Pontszámod: ${score} / ${questions.length}`;
}

// Első kérdés megjelenítése
showQuestion();