$(document).ready(function(){
// global variables
var wins = 0;
var losses = 0;
var score = 0;
var random = randNum();
var crystal;

// DOM element selection
$("#random-number").text(random);
$("#win").text("Wins: " + wins);
$("#loss").text("Losses: " + losses);

function start() {
// generate random values of crystals
$("#blue").val(Math.floor(Math.random() * (12) + 1));
$("#green").val(Math.floor(Math.random() * (12) + 1));
$("#purple").val(Math.floor(Math.random() * (12) + 1));
$("#red").val(Math.floor(Math.random() * (12) + 1));
$("#score").text(score);
score = 0;
random = randNum();
crystal = 0;
};

// generate random number
function randNum() { 
    return Math.floor(Math.random() * (101) + 19);
};

start();

// add crystal values together
$("button").on("click" , function() {
    crystal = $(this).val();
    crystal = parseInt(crystal);
    score += crystal;
    $("#score").text(score);
    checkWin();
});

// determine if crystal value is equal to random number
function checkWin() {
// if value is equal then win
if (score === random) {
    wins++;
    alert("You Win!");
    start();
    }
//if value is over then 
else if (score > random) { 
    losses++;
    alert("Sorry Buddy");
    start();
    };
    $("#win").text("Wins: " + wins);
    $("#loss").text("Losses: " + losses);
};

});