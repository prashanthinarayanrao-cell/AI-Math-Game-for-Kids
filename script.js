let grade = 1;
let correctAnswer;
let score = 0;
let timeLeft = 15;
let timer;

function setGrade(selectedGrade) {
  grade = selectedGrade;
  document.getElementById("grade-selection").style.display = "none";
  document.getElementById("math-box").style.display = "block";

  // Show score and timer
  document.getElementById("score").style.display = "inline-block";
  document.getElementById("timer").style.display = "inline-block";

  generateQuestion();
  startTimer();
}

function generateQuestion() {
  let num1, num2, operation;
  const questionElement = document.getElementById("question");

  switch (grade) {
    case 1:
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
      operation = "+";
      correctAnswer = num1 + num2;
      break;
    case 2:
      num1 = Math.floor(Math.random() * 20);
      num2 = Math.floor(Math.random() * 10);
      operation = "+";
      correctAnswer = num1 + num2;
      break;
    case 3:
      num1 = Math.floor(Math.random() * 20);
      num2 = Math.floor(Math.random() * 10);
      operation = ["+", "-"][Math.floor(Math.random() * 2)];
      correctAnswer = operation === "+" ? num1 + num2 : num1 - num2;
      break;
    case 4:
      num1 = Math.floor(Math.random() * 50);
      num2 = Math.floor(Math.random() * 20);
      operation = ["+", "-", "×"][Math.floor(Math.random() * 3)];
      correctAnswer =
        operation === "+"
          ? num1 + num2
          : operation === "-"
          ? num1 - num2
          : num1 * num2;
      break;
    case 5:
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 20);
      operation = ["+", "-", "×", "÷"][Math.floor(Math.random() * 4)];
      correctAnswer =
        operation === "+"
          ? num1 + num2
          : operation === "-"
          ? num1 - num2
          : operation === "×"
          ? num1 * num2
          : Math.floor(num1 / num2);
      break;
  }

  questionElement.innerText = `🤔 What is ${num1} ${operation} ${num2}?`;
  document.getElementById("feedback").innerText = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const feedback = document.getElementById("feedback");

  if (isNaN(userAnswer)) {
    feedback.innerText = "Please enter a number!";
    feedback.style.color = "#ff4d4d";
    return;
  }

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("score").innerText = `Score: ${score}`;
    const greetings = [
      "🎉 Great job!",
      "🌟 You’re awesome!",
      "👏 Well done!",
      "😃 Super work!",
      "🥳 You got it right!"
    ];
    feedback.innerText = greetings[Math.floor(Math.random() * greetings.length)];
    feedback.style.color = "#00cc66";
  } else {
    feedback.innerHTML = `Not quite, give it another try! 📝<br>The answer is ${correctAnswer}. Try the next one! 😊`;
    feedback.style.color = "#ff6600";
  }
}

function nextQuestion() {
  generateQuestion();
}

function startTimer() {
  timeLeft = 15;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      alert("⏰ Time’s up! Let's go to the next question!");
      nextQuestion();
      startTimer();
    }
  }, 1000);
}
