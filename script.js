const questionList = [
  {
    question: "What is the capital of Australia?",
    answer: "Canberra"
  },
  {
    question: "What is the largest mammal?",
    answer: "Blue Whale"
  }
];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");

let questionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = questionList[questionIndex];
  question.textContent = currentQuestion.question;
  answer.value = ""; // to make the answer blank after submitted
}

displayQuestion();

function submit() {
  const userAnswer = answer.value.toLowerCase();

  if (userAnswer === "") {
    alert("Please enter your answer");
    return;
  }

  const currentQuestion = questionList[questionIndex];
  if (userAnswer === currentQuestion.answer.toLowerCase()) {
    score++;
  }

  questionIndex++;

  if (questionIndex < questionList.length) {
    displayQuestion();
  } else {
    question.style.display = "none";
    answer.style.display = "none";
    submitButton.style.display = "none";
    result.textContent = "Your score is " + score + "/" + questionList.length;
  }
}