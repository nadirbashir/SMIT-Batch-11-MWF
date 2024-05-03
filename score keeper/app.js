var targetNum, p1Score;

function start() {
  var target = document.getElementById("targetNum");
  targetNum = +target.value;
  var scoreContainer = document.getElementById("scoreContainer");
  if (!targetNum && targetNum < 1) {
    alert("Please enter a positive number");
    return;
  }
  scoreContainer.style.display = "flex";
}

function addScore(player) {
  var scoreBoard = document.getElementById("p1Score");
  p1Score = Number(scoreBoard.innerText);
  p1Score++;
  console.log(p1Score);
  scoreBoard.innerText = p1Score;

  if (p1Score === targetNum) {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var winner = document.getElementById("winner");
    btn1.setAttribute("disabled", "true");
    btn2.setAttribute("disabled", "true");
    winner.innerText = "Player 1 won!";
  }
}
