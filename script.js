const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false }
    ]
  },
  {
    question: "Which tag is used to link a CSS file?",
    answers: [
      { text: "<css>", correct: false },
      { text: "<style>", correct: false },
      { text: "<link>", correct: true }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function showQuestion() {
  resetState();
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.onclick = () => {
      if (answer.correct) score++;
      nextQuestion();
    };
    answersElement.appendChild(button);
  });
}

function resetState() {
  answersElement.innerHTML = "";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.style.display = "none";
  answersElement.style.display = "none";
  nextButton.style.display = "none";
  scoreElement.style.display = "block";
  scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
}

nextButton.onclick = nextQuestion;
showQuestion();
