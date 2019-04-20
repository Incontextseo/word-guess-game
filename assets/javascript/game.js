<script>

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
    ]
    
    
    // Randomly selects string from var tvShows //
    
    var show = tvShows[Math.floor(Math.random() * tvShows.length)];
    var rightLetter = [];
    var wrongLetter = [];
    var underscore = [];
    var guessesLeft = 10;
    
    var guessesLeftText = document.getElementById("guesses");

    console.log(show)
    
    // Creates underscores based on length of word //
    var makeUnderscore = () => {
        for (var i=0; i<show.length; i++) {
            underscore.push(" _ ");
        }
        return underscore;
        }
    
    console.log(makeUnderscore());
    
    
    // Record keys user presses //
    
    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
    
    // Tells the user how many guesses they have remaining out of 10 //
        
        guessesLeft--
        console.log(guessesLeft);
    
    // Determines if userGuess is found in word, pushes to rightLetter or wrongLetter array //   
    
        if(show.indexOf(userGuess) > -1) {
            for (var w = 0; w < show.length; w++) {
                if (show[w] === userGuess) {
    
    // Replaces underscores with correct user guesses //
                    underscore[show.indexOf(userGuess)] = userGuess;
                    rightLetter.push(userGuess);
                    console.log(show[w])
                }}
                    console.log("In word")
                    console.log(show.indexOf(userGuess))
                    console.log(underscore);
            }
            else{
            wrongLetter.push(userGuess);
                    console.log("Not in word")
        }
    
    };

    guessesLeftText.textContent = guessesLeft;

    </script>