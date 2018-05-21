var Choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessedLetter = [];




    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
        var computerChoice = Choices[Math.floor(Math.random()*Choices.length)]; //computer selects random letter
        guessedLetter.push(userGuess);


if (userGuess == computerChoice){

wins++;
guessesLeft = 9;
guessedLetter.length = 0;

}
else if (guessesLeft == 0){
losses++;
guessesLeft = 9;
guessedLetter.length = 0;
}

else if (userGuess !== computerChoice){

guessesLeft--;

}


var html = "<h1>The Psychic Game</h1>" + 

"<p>Guess what letter I'm thinking of!</p>" +

"<p>Total Wins: " + 

wins + 
"</p>" +
"<p>Total Losses: " + 
losses + 
"</p>" +
"<p>Guesses Left: " + 
guessesLeft + 
"</p>" +
"<p>Your Guesses so far: " +
guessedLetter +
"</p>"
;

document.querySelector('#game').innerHTML = html;


}







