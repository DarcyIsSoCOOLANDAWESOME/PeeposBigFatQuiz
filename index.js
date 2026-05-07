const startBtn = document.querySelector(".btnStart");
const nextBtn = document.querySelector(".btnNext");
const question = document.getElementById("question");
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

  typingAnim(q.question);

  answerA.innerText = q.options[0];
  answerB.innerText = q.options[1];
  answerC.innerText = q.options[2];
  answerD.innerText = q.options[3];
}

startBtn.addEventListener("click", () => {
  displayNextQuizQuestion();
  startBtn.classList.toggle("btn-vanish");
  // nextBtn.classList.toggle("btn-display");
  answerA.classList.toggle("btn-display");
  answerB.classList.toggle("btn-display");
  answerC.classList.toggle("btn-display");
  answerD.classList.toggle("btn-display");
});

function handleAnswer(e) {
  const selectedBtn = e.target;
  const currentQ = quizQuestions[currentQuestion];

  const isCorrect = currentQ.answer === selectedBtn.innerText;

  answers.forEach((btn) => btn.setAttribute("disabled", true));

  if (isCorrect) {
    score++;
    selectedBtn.classList.add("btn-turn--green");
  } else {
    selectedBtn.classList.add("btn-turn--red");

    answers.forEach((btn) => {
      if (btn.innerText === currentQ.answer) {
        btn.classList.add("btn-turn--green");
      }
    });
  }

  updatePoints();
  currentQuestion++;

  const isGameOver = currentQuestion >= quizQuestions.length;

  setTimeout(() => {
    answers.forEach((btn) => {
      btn.removeAttribute("disabled");
      btn.classList.remove("btn-turn--green", "btn-turn--red");
    });

    if (isGameOver) {
      playAgainBtn.classList.add("btn-display");
      return;
    }

    displayNextQuizQuestion();
  }, 2000);
}

answers.forEach((answerBtn) => {
  answerBtn.addEventListener("click", handleAnswer);
});

playAgainBtn.addEventListener("click", () => {
  restartGame();
});

function restartGame() {
  currentQuestion = 0;
  score = 0;
  updatePoints();
  displayNextQuizQuestion();
  playAgainBtn.classList.remove("btn-display");
}

function typingAnim(text, speed = 50) {
  //A new function which takes text (string) and (anim)speed (number)
  question.textContent = ""; //First we clear the question string

  let i = 0; //we are creating a new variable which is the number of characters. This var is 0

  function typing() {
    //Function in a function
    if (i < text.length) {
      //if the number of characters is less than the length of the inner text characters

      question.textContent += text.charAt(i); //then add on a character till you have met the length of inner text
      i++;
      setTimeout(typing, speed); //typing is calling the typing function and speed is delayed by 0.5s for each character
    }
  }

  typing();
}
