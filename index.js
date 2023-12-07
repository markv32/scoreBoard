var timerInterval;
var timerRunning = false;
var initialTime = { minutes: 15, seconds: 0 };
var currentTime = { ...initialTime };

function addScore(teamId, points) {
  var scoreElement = document.getElementById(teamId);
  var currentScore = parseInt(scoreElement.innerText, 10);
  scoreElement.innerText = currentScore + points;

  updateLeader();
}

function startNewGame() {
  document.getElementById("teamAScore").innerText = "0";
  document.getElementById("teamBScore").innerText = "0";
  document.getElementById("period").innerText = "1";
  document.getElementById("fouls").innerText = "0";
  document.getElementById("timer").innerText = "15:00";

  updateLeader();
}

function changePeriod(change) {
  var periodElement = document.getElementById("period");
  var currentPeriod = parseInt(periodElement.innerText, 10);
  var newPeriod = Math.max(1, Math.min(4, currentPeriod + change));
  periodElement.innerText = newPeriod;
}

function addFoul() {
  var foulsElement = document.getElementById("fouls");
  var currentFouls = parseInt(foulsElement.innerText, 10);
  foulsElement.innerText = currentFouls + 1;
}

function updateLeader() {
  var teamAScore = parseInt(
    document.getElementById("teamAScore").innerText,
    10
  );
  var teamBScore = parseInt(
    document.getElementById("teamBScore").innerText,
    10
  );

  var teamA = document.getElementById("teamA");
  var teamB = document.getElementById("teamB");

  if (teamAScore > teamBScore) {
    teamA.style.backgroundColor = "#2ecc71";
    teamB.style.backgroundColor = "";
  } else if (teamAScore < teamBScore) {
    teamB.style.backgroundColor = "#2ecc71";
    teamA.style.backgroundColor = "";
  } else {
    teamA.style.backgroundColor = "";
    teamB.style.backgroundColor = "";
  }
}

var timerInterval;
var timerRunning = false;
var initialTime = { minutes: 15, seconds: 0 };
var currentTime = { ...initialTime };

// window.onload = function () {
//   updateTimerDisplay(currentTime);
// };

// function startTimer() {
//   updateTimerDisplay(currentTime);

//   timerInterval = setInterval(function () {
//     if (currentTime.minutes === 0 && currentTime.seconds === 0) {
//       clearInterval(timerInterval);
//       timerRunning = false;
//     } else {
//       decrementTime();
//       updateTimerDisplay(currentTime);
//     }
//   }, 1000);

//   timerRunning = true;
// }

// function startStopTimer() {
//   if (timerRunning) {
//     clearInterval(timerInterval);
//   } else {
//     startTimer();
//   }
// }

// function decrementTime() {
//   if (currentTime.seconds === 0) {
//     currentTime.minutes--;
//     currentTime.seconds = 59;
//   } else {
//     currentTime.seconds--;
//   }
// }

// function updateTimerDisplay(time) {
//   var timerElement = document.getElementById("timer");
//   timerElement.innerText =
//     formatTime(time.minutes) + ":" + formatTime(time.seconds);
// }

// function formatTime(value) {
//   return value < 10 ? "0" + value : value;
// }
//STARTS HERE//
// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// window.onload = function () {
//   var fiveMinutes = 60 * 5,
//     display = document.querySelector("#time");
//   startTimer(fiveMinutes, display);
// };
//STOP HERE//

var countDown;

function countDownClock() {
  var timeLeft = 1200;
  var text = document.getElementById("countDownTimer");
  countDown = setInterval(function () {
    if (timeLeft == 0) {
      clearInterval(countDown);
      text.innerHTML = "finished!";
    } else {
      text.innerHTML = timeLeft;
    }
    timeLeft -= 1;
  }, 1000);
}