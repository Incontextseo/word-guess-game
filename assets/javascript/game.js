<script>

// Creates an array of possible words for word-guess-game //

var tvShows = [
    "friends",
    "cheers",
    "frasier",
    "ellen",
    "seinfeld",
    "boy meets world",
    "fresh prince",
    "blossom",
    "sister sister",
    "home improvement",
    "family matters",
    "sabrina the teenage witch",
    "the simpsons",
    "rugrats",
    "ren and stimpy",
    "saved by the bell",
    "all that",
    "full house",
    "er",
    "mad about you"
]


// Randomly selects string from var tvShows //

var show = tvShows[Math.floor(Math.random() * tvShows.length)];
var rightLetter = [];
var wrongLetter = [];
var underscore = [];
var remainingGuesses = 10;


console.log(show)

// Creates underscores based on length of word //
var makeUnderscore = () => {
    for (var i=0; i<icon.length; i++) {
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
    
    remainingGuesses--
    console.log(remainingGuesses);

// Determines if userGuess is found in word, pushes to rightLetter or wrongLetter array //   

    if(icon.indexOf(userGuess) > -1) {
        for (var w = 0; w < icon.length; w++) {
            if (icon[w] === userGuess) {

// Replaces underscores with correct user guesses //
                underscore[icon.indexOf(userGuess)] = userGuess;
                rightLetter.push(userGuess);
                console.log(icon[w])
            }}
                console.log("In word")
                console.log(icon.indexOf(userGuess))
                console.log(underscore);
        }else{
        wrongLetter.push(userGuess);
                console.log("Not in word")
    }

};
</script>