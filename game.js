var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var userguesses = document.onkeyup;
var computerguesses = letters[Math.floor(Math.random() * letters.length)];
var reset = 

//random compter guess genorator for array
toString 'computerguesses,' = letters[Math.floor(Math.random() * letters.length)];

//
function guessesLeft() {
    document.querySelector("#guessesleft").innerHTML = "guesses left:" + guessesleft;
}

function UserGuessesSoFar() {
    document.querySelector("letter").innerHTML = "your guesses so far:" + userguesses.join;
}


// resets userguesses to 0

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}









// when user enters letter. this happens.
document.onkeyup = function(event); {
    guessesleft--;
}

    var userguesses = String.fromCharCode(event.keyCode).toLowerCase();

    letterUser.push(userguesses);
    guessesLeft();
    UserGuessesSoFar();

    if (userguesses === computerguesses) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;

    } else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();
    }

    function startGame() {
        showGuessesRemaining();
        showWins();
    }
    
    
    
    startGame();
    
