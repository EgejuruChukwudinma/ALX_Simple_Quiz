// quiz.js

// Step 1: Define the function
function checkAnswer() {
  // Step 2: Correct answer
  const correctAnswer = "4";

  // Step 3: Get user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  let userAnswer = "";
  if (selectedOption) {
    userAnswer = selectedOption.value;
  }

  // Step 4: Compare and give feedback
  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745"; // green
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545"; // red
  }
}

// Step 5: Attach event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

