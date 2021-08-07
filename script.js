const quizData = [
    {
        question: "De quem é a famosa frase “Penso, logo existo”?",
        a: "Platão",
        b: "Galileu Galilei",
        c: "Descartes",
        d: "Sócrates",
        correct: "c",
    },
    {
        question: "Quantas casas decimais tem o número pi?",
        a: "Duas",
        b: "Milhares",
        c: "Vinte",
        d: "Infinitas",
        correct: "d",
    },
    {
        question: "O que a palavra legend significa em português?",
        a: "Legenda",
        b: "Lenda",
        c: "Legendário",
        d: "História",
        correct: "b",
    },
    {
        question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
        a: "12 minutos",
        b: "8 minutos",
        c: "segundos",
        d: "12 horas",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você acertou: ${score}/${quizData.length} perguntas.</h2>
                
                <button onclick="location.reload()">Voltar</button>
            `;
        }
    }
});