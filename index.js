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
const answers = document.querySelector(".btn--answer");

const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");

const pointsText = document.querySelector("#points");

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

function displayQuizQuestionOne() {
  const q = quizQuestions[0];
  const ans = q.answer;
  console.log(`${q.question} ${q.options} ${q.answer}`);
  question.innerText = q.question;
  answerA.innerText = q.options[0];
  answerB.innerText = q.options[1];
  answerC.innerText = q.options[2];
  answerD.innerText = q.options[3];

  // ans.addEventListener("click", () => {
  //   console.log("Correct");
  //   question.innerText = "Correct";
  // });
}

let currentQuestion = 1;

function displayNextQuizQuestion() {
  const q = quizQuestions[currentQuestion];
  const ans = q.answer;
  currentQuestion++;
  console.log(
    `question: ${q.question} choices: ${q.options} answer: ${q.answer}`,
  );
  question.innerText = q.question;
  answerA.innerText = q.options[0];
  answerB.innerText = q.options[1];
  answerC.innerText = q.options[2];
  answerD.innerText = q.options[3];
}

startBtn.addEventListener("click", () => {
  displayQuizQuestionOne();
});

nextBtn.addEventListener("click", () => {
  displayNextQuizQuestion();
  console.log("display next question");
});

//We want question 1 to appear
//Need to keep track of questions
//when option is clicked > check if option === answer
