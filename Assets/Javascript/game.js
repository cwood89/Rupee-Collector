// global variables
var wins = 0;
var losses = 0;
var score = 0;
var random = randNum();
var crystal;

console.log(random);
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
score = 0;
random = randNum();
crystal = 0;;
};start();

// generate random number
function randNum() { 
    return Math.floor(Math.random() * (101) + 19);
};

// add crystal values together
$("button").on("click" , function() {
    crystal = $(this).val();
    crystal = parseInt(crystal);
    score += crystal;
    console.log(this);
    console.log(score);
    $("#score").text(score)
});

// determine if crystal value is equal to random number
if (score===random){
// if value is equal then win
wins++;
} else if (score > random) { 
//if value is over then 
losses++;
};
// restart game
start();