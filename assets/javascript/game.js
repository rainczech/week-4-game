// variables
// =====
var wins = "";
var losses = "";
// =====
// functions
// =====

// give each gem a random value
for(var i=0; i < 4; i++) {
    var gemNumber = Math.floor(Math.random()*11+1);
    console.log(gemNumber);

    // crystal = $(".gems");
    // crystal.attr({
    //     "data": gemNumber
    };

// crystal values when clicked
$(".gems").on("click", function() {
    console.log($(this).attr(crystal.data));
});





// produce random goal number between 19-120



// var goalScore = Math.floor(Math.random()* 20);
// goalScore=$("goalScore");
// goalScore.toString.text();
//random number for crystals







// main
// =====


    var goalScore= Math.floor(Math.random()*101+19);
    $("#goalScore").html("Your goal score is: " + goalScore);
    console.log(goalScore);


$(document).ready; 
