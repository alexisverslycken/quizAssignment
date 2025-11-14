document.getElementById("juisteKnop1").style.display = "none";
document.getElementById("fouteKnop1").style.display = "none";
document.getElementById("juisteKnop2").style.display = "none";
document.getElementById("fouteKnop2").style.display = "none";
document.getElementById("juisteKnop3").style.display = "none";
document.getElementById("fouteKnop3").style.display = "none";
document.querySelector(".question2").style.display = "none";
document.querySelector(".question3").style.display = "none";
document.getElementById("next1").style.display = "none";
document.getElementById("next2").style.display = "none";

document.getElementById("buttonQ1A").onclick = function() {
  this.innerHTML = "Oops!";
  document.getElementById("fouteKnop1").style.display = "block";
  document.getElementById("next1").style.display = "block";
};
document.getElementById("buttonQ1B").onclick = function() {
  this.innerHTML = "Bingo!";
  document.getElementById("juisteKnop1").style.display = "block";
  document.getElementById("next1").style.display = "block";
};
document.getElementById("next1").onclick = function() {
  document.querySelector(".question2").style.display = "block";
};


document.getElementById("buttonQ2A").onclick = function() {
  this.innerHTML = "Bingo!";
  document.getElementById("juisteKnop2").style.display = "block";
  document.getElementById("next2").style.display = "block";
};
document.getElementById("buttonQ2B").onclick = function() {
  this.innerHTML = "Oops!";
  document.getElementById("fouteKnop2").style.display = "block";
  document.getElementById("next2").style.display = "block";
};
document.getElementById("next2").onclick = function() {
  document.querySelector(".question3").style.display = "block";
};

document.getElementById("buttonQ3A").onclick = function() {
  this.innerHTML = "Bingo!";
  document.getElementById("juisteKnop3").style.display = "block";
};
document.getElementById("buttonQ3B").onclick = function() {
  this.innerHTML = "Oops!";
  document.getElementById("fouteKnop3").style.display = "block";
};

