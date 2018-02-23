// variables
// =====
var wins = "";
var losses = "";
var userScore = 0;
// =====
// functions
// =====

// give each gem a random value
// for loop commented out //
// for(var i=0; i < 4; i++) {
    // var gemNumber = Math.floor(Math.random()*11+1);
    // console.log(gemNumber);

    // crystal = $(".gems");
    // crystal.attr({
    //     "data": gemNumber
    // });
// };

var gem1 = {
    points: Math.floor(Math.random()*11+1),
};

var gem2 = {
    points: Math.floor(Math.random()*11+1),
};

var gem3 = {
    points: Math.floor(Math.random()*11+1),
};

var gem4 = {
    points: Math.floor(Math.random()*11+1),
};

$("#gem1").on("click", function () {
    console.log(gem1.points);
    userScore += gem1.points;
});

$("#gem2").on("click", function () {
    console.log(gem2.points);
    userScore += gem2.points;
    console.log(userScore);
});

$("#gem3").on("click", function () {
    console.log(gem3.points);
});

$("#gem4").on("click", function () {
    console.log(gem4.points);
});

// summation of clicks

$("#userScore").html("Your current amount is: " + userScore);


// compare user amount to goal number


// determine win or loss


// keep track of wins



// keep track of losses



// restart game w/out resetting wins and losses


// main
// =====


    var goalScore= Math.floor(Math.random()*101+19);
    $("#goalScore").html("Your number goal is: " + goalScore);
    console.log(goalScore);


$(document).ready; 
