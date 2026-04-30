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
const question = document.querySelector(".questionText");
const answers = document.querySelector(".btn--answer");

const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");

const points = document.querySelector("#points");
points == 0;

startBtn.addEventListener("click", () => {
  question.innerText = "Who won Worlds Strongest Man 2025?";
  answerA.innerText = "Rayno Nel";
  answerB.innerText = "Mitchell Hooper";
  answerC.innerText = "Tom Stoltman";
  answerD.innerText = "Eddie Hall";

  answerA.addEventListener("click", () => {
    question.innerText = "CORRECT!";
  });
});

if (question.innerText == "CORRECT!") {
  points++;
}

//When the start button is pressed, generate question ONE text and answers

//Question One (questionText)= Who won Worlds Strongest Man 2025?
//btn--answer[1] text "Rayno Nel" (CORRECT)
//btn--answer[2] text "Mitchell Hooper"
//btn--answer[3] text "Tom Stoltman"
//btn--answer[4] text "Eddie Hall"

//Question Two (questionText) = As of 2026, who holds the world record for the shield carry?
//btn--answer[1] text "Pavlo Kordiyaka"
//btn--answer[2] text "Gavin Bilton"
//btn--answer[3] text "Paddy Haynes" (CORRECT)
//btn--answer[4] text "Mateusz Kieliszkowski"

//Question Three (questionText) = Who broke the deadlift world record in 2016?
//btn--answer[1] text "Mitchell Hooper"
//btn--answer[2] text "Eddie Hall" (CORRECT)
//btn--answer[3] text "Mark Felix"
//btn--answer[4] text "Hafþór Júlíus Björnsson"

//Question Four (questionText) = "As of April 2026, what is the Deadlift World record?"
//btn--answer[1] text "500kg"
//btn--answer[2] text "505kg"
//btn--answer[3] text "510kg" (CORRECT)
//btn--answer[4] text "512kg"

//addEventListener Click "Correct" Answer > Correct btn = green
//addEventListener Click "WRONG" Answer > button click = red. Correct btn = green
