//Basic Idea//
//Peepo's Big Quiz! (my very epic character)
//Peepo asks a question
//You answer!
//Answer from 4 choices. Only 1 is correct
//Incorrect answer or Correct answer

// Button if button is pressed > display no button and start the game??
//If (button pressed == true) {start()}

//Need a function or a loop for the questions?
//if correctAnswer === true ++point (If the answer is true, add a point)
//if correctAnswer !== true ===point (If the correct answer is not true, keep points the same)
//Choice from 4 answers. (3 answers) !==true (1 answer) === true (3 answers are not true, 1 answer is true)

const startBtn = document.querySelector(".btnStart");
const nextBtn = document.querySelector(".btnNext");
const question = document.querySelector(".questionText");
const answers = document.querySelectorAll(".btn--answer");

const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");
const buttons = document.querySelector(".btn");
const scoreText = document.querySelector("#points");
const playAgainBtn = document.querySelector(".btnPlayAgain");
let score = 0;
function updatePoints() {
  scoreText.innerText = score;
}
const quizQuestions = [
  {
    question: "Who won Worlds Strongest Man 2025?",
    options: ["Rayno Nel", "Mitchell Hooper", "Tom Stoltman", "Eddie Hall"],
    answer: "Rayno Nel",
  },
  {
    question: "As of 2026, who holds the world record for the shield carry?",
    options: [
      "Pavlo Kordiyaka",
      "Gavin Bilton",
      "Paddy Haynes",
      "Mateusz Kieliszkowski",
    ],
    answer: "Paddy Haynes",
  },
  {
    question: "Who broke the deadlift world record in 2016?",
    options: [
      "Mitchell Hooper",
      "Eddie Hall",
      "Mark Felix",
      "Hafþór Júlíus Björnsson",
    ],
    answer: "Eddie Hall",
  },
  {
    question: "As of April 2026, what is the Deadlift World record?",
    options: ["500kg", "505kg", "510kg", "512kg"],
    answer: "510kg",
  },
];

let currentQuestion = 0;
const finalQuestion = 3;
function displayNextQuizQuestion() {
  let q = quizQuestions[currentQuestion];

  console.log(
    `question: ${q.question} choices: ${q.options} answer: ${q.answer}`,
  );
  question.innerText = q.question;
  answerA.innerText = q.options[0];
  answerB.innerText = q.options[1];
  answerC.innerText = q.options[2];
  answerD.innerText = q.options[3];

  if (currentQuestion === quizQuestions.length - 1) {
    startBtn.classList.toggle("btn-display");
    console.log("final");
  }
}

startBtn.addEventListener("click", () => {
  displayNextQuizQuestion();
  startBtn.classList.toggle("btn-vanish");
  nextBtn.classList.toggle("btn-display");
});

nextBtn.addEventListener("click", () => {
  displayNextQuizQuestion();
  console.log("display next question");
});

answers.forEach((answerBtn) => {
  answerBtn.addEventListener("click", (e) => {
    const isCorrect =
      quizQuestions[currentQuestion].answer === e.target.innerText;

    if (isCorrect) {
      //&& !finalQuestion
      score += 1;
      currentQuestion++;
      updatePoints();
      e.target.classList.toggle("btn-turn--green");
      answers.forEach((btn) => btn.setAttribute("disabled", true));
      setTimeout(() => {
        displayNextQuizQuestion();
        answers.forEach((btn) => btn.removeAttribute("disabled"));
        e.target.classList.toggle("btn-turn--red");
        console.log("ButtonsEnabled?");
      }, 2000);
      if (currentQuestion === finalQuestion) {
        playAgainBtn.classList.toggle("btn-display");
        startBtn.classList.toggle("btn-vanish");
      }
    }

    if (!isCorrect) {
      //&& !finalQuestion
      score == score;
      currentQuestion++;
      updatePoints();
      answer.classList.toggle("btn-turn--green");
      answers.forEach((btn) => btn.setAttribute("disabled", true));
      setTimeout(() => {
        displayNextQuizQuestion();
        answers.forEach((btn) => btn.removeAttribute("disabled"));
        e.target.classList.toggle("btn-turn--red");
      }, 2000);
    }
  });
});
