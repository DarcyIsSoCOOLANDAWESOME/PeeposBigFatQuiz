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
      "Mateusz Kieliszkowski",
    ],
    answer: "Eddie Hall",
  },
  {
    question: "As of April 2026, what is the Deadlift World record?",
    options: ["500kg", "505kg", "510kg", "512kg"],
    answer: "510kg",
  },
];

function displayQuiz() {
  //Need a function to display the quiz
  quizQuestions.forEach((q) => {
    //need to use foreach for each array element
    console.log(`${quizQuestions.question} ${quizQuestions.options}`);
  });
}

startBtn.addEventListener("click", () => {
  displayQuiz();
});

//We want question 1 to appear
//Need to keep track of questions
//when option is clicked > check if option === answer
