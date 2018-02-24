// variables
// =====
var wins = 0;
var losses = 0;
var userScore = 0;
var gem1;
var gem2;
var gem3;
var gem4;
var goalScore;
// =====
// functions
// =====


$(document).ready(function(){

function startGame(){
userScoreDiv.html("Current amount is: 0");
goalScore= Math.floor(Math.random()*101+19);
$("#goalScore").html("Your goal is: " + goalScore);
console.log(goalScore);

gem1 = {
    points: Math.floor(Math.random()*11+1),
};

gem2 = {
    points: Math.floor(Math.random()*11+1),
};

gem3 = {
    points: Math.floor(Math.random()*11+1),
};

gem4 = {
    points: Math.floor(Math.random()*11+1),
}};

$("#gem1").on("click", function () {
    console.log(gem1.points);
    userScore += gem1.points;
    updateScore();
    winLoseTest();

});

$("#gem2").on("click", function () {
    console.log(gem2.points);
    userScore += gem2.points;
    updateScore();
    winLoseTest();
});

$("#gem3").on("click", function () {
    console.log(gem3.points);
    userScore += gem3.points;
    updateScore();
    winLoseTest();
   
});

$("#gem4").on("click", function () {
    console.log(gem4.points); 
    userScore += gem4.points;
    updateScore();
    winLoseTest();
});

var userScoreDiv = $("#userScore");
    function updateScore(){
        userScoreDiv.html("Current amount is: " + userScore);
    }


// };


// compare user amount to goal number
function winLoseTest (){
if (userScore > goalScore) {
    console.log("loser!");
    losses++;
    $("#losses").html(losses);
    startGame();
    alert("You lose! Try Again!");

} else if (userScore === goalScore) {
    console.log("you win");
    wins++;
    $("#wins").html(wins);
    startGame ();
    alert("Woo Hoo! You Win!");
}};

// determine win or loss

startGame();

});
// keep track of wins


// keep track of losses



// restart game w/out resetting wins and losses


// main
// =====


   



