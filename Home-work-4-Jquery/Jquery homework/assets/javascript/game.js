var yourScore = document.getElementById("yourscore");
//var yourSocre= getElementById (blue,red, green,yellow.onclick(math.sum));
yourScore.innerHTML = 0;
var targetscore = documtent.getElementById("targetScore");
targetscore.innerHTML = getRandomValue(10, 4);

//Funtions
function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}
