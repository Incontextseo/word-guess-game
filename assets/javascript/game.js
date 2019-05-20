    // Creates an array of possible words for word-guess-game //
    
    var tvShows = [
        "friends",
        "cheers",
        "frasier",
        "ellen",
        "seinfeld",
        "blossom",
        "sabrina",
        "simpsons",
        "rugrats",
        "er",
        "roseanne",
        "arthur",
        "fresh prince",
        "family matters",
    ]
    
    
    // Randomly selects string from var tvShows //
    
    var show = tvShows[Math.floor(Math.random() * tvShows.length)];
    var rightLetter = [];
    var wrongLetter = [];
    var underscore = [];
    var remainingGuess = 10;
    var winsTotal = 0;
    var winnerText = "";
    var usedLetter = [];
    var timer;
    var keyup = true;
    
    var winsTotalText = document.getElementById("wins");
    var underscoreText = document.getElementById("word");
    var wrongLetterText = document.getElementById("wrong-letter");
    var guessesLeftText = document.getElementById("guesses");
    var resetButton = document.getElementById("reset");
    var winnerText = document.getElementById("winner");
    var directionsText = document.getElementById("directions-text")

    console.log(show)
    
    // Creates underscores based on length of word //
    var makeUnderscore = () => {
        clearInterval(timer);
        underscore = []
            for (var i=0; i<show.length; i++) {
                if (show[i] === " ") {
                underscore.push("*");
                } else {
                underscore.push("_");
                }
            }
        return underscore;
        }
    
    console.log(makeUnderscore());
    
    function restartGame () {
        keyup = true;
        clearInterval(timer);
        show = ""
        show = tvShows[Math.floor(Math.random() * tvShows.length)];
        console.log(show)
        remainingGuess = 10;
        guessesLeftText.textContent = remainingGuess;
        usedLetter = []
        wrongLetter = []
        winnerText.innerHTML = '';
        wrongLetterText.innerHTML = [];
        makeUnderscore();
        underscoreText.textContent = underscore.join(' ');
    }

if (keyup === true) {
    // Record keys user presses //
    
    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
    
    
    // Determines if userGuess is found in word, pushes to rightLetter or wrongLetter array //   
    console.log(userGuess)
        if(show.indexOf(userGuess) > -1) {
            for (var w = 0; w < show.length; w++) {
                if (show[w] === userGuess) {
    
    // Replaces underscores with correct user guesses //
                    underscore[w] = userGuess;
                    rightLetter.push(userGuess);
                    console.log(show[w])
                    console.log("In word");
                    console.log(show.indexOf(userGuess));
                    console.log(rightLetter);
                    console.log(underscore);

                }

            }
        } else if (wrongLetter.includes(userGuess)) {
            usedLetter.push(userGuess);
            console.log(usedLetter);
        } else {
            wrongLetter.push(userGuess);
            remainingGuess--;
                    console.log(wrongLetter);   
                    console.log("Not in word");
        }

        console.log(typeof remainingGuess)
        guessesLeftText.textContent = remainingGuess;
        if (remainingGuess < 1) {
            console.log(typeof remainingGuess)
                guessesLeftText.innerHTML = "Game Over";
                console.log("Game Over")
                timer = setInterval(function(){
                    restartGame();
                  }, 5000);
        }
        
        console.log("underscoreText=" + underscore.join(''))
        if (underscore.join('') === show) {
            winnerText.innerHTML = "You Won!";
            winsTotal++;
            keyup = false;
                console.log(winsTotal)
                console.log("underscoreText=" + underscore.join(''))

        }
        // Moving all elements to the DOM
        winsTotalText.textContent = winsTotal;
        underscoreText.textContent = underscore.join(' ');
        wrongLetterText.textContent = wrongLetter;

    }

    resetButton.addEventListener("click", function(){
        restartGame ();
    })
}

    // // Hide the directions
    // directionsText.textContent = "";

    // Populate TV Show to guess   
    underscoreText.textContent = underscore.join(' ');