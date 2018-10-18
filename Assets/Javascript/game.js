// global variables
wins = 0;
number = randNum();
losses = 0;
$("#random-number").text(number);
$("#win").text(wins);
$("#loss").text(losses);
// $("#score).innerHtml();
// generate random number
function randNum() { 
    return Math.floor(Math.random() * (101) + 19);
};
// generate random values of crystals
// add crystal values together
// determine if crystal value is equal to random number
// if value is equal then win
//if value is over then lose
// restart game