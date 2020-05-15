function hangingGame() {
    var wordToGuess = prompt("(Player 1) Give a word to guess");
    var wordToStar = [];
    var try10 = 10;
    var findBoolean = false;
    var wrongLetters = [];
    for (var i = 0; i < wordToGuess.length; i++) {
        wordToStar[i] = "*";
    }
    var remainLetters = wordToGuess.length;
    console.log(wordToStar)
    while (remainLetters > 0) {
        var LetterGuess = prompt("(Player 2) Give a letter");
        findBoolean == false
        if (LetterGuess == null) {
            break;
        } else if (LetterGuess.length !== 1) {
            alert("Give just ONE letter");
        } else if (wrongLetters.includes(LetterGuess) == true || wordToStar.includes(LetterGuess) == true) {
            console.log(`You already choosed this letter. Guess again. You have again ${try10} lives`);
            findBoolean == false;
        } else if (wordToGuess.includes(LetterGuess) == false && wordToStar.includes(LetterGuess) == false) {
            try10--;
            findBoolean == false;
            wrongLetters.push(LetterGuess);
            console.log(`Wrong letter! Try again! Remains ${try10} lives`);
            console.log("List of incorrect letters chosen: " + wrongLetters);
        } else {
            for (var j = 0; j < wordToGuess.length; j++) {
                if (wordToGuess[j] === LetterGuess) {
                    wordToStar[j] = LetterGuess;
                    remainLetters--;
                    findBoolean = true;
                    console.log(wordToStar.join(" "));
                }
            }
            if (findBoolean == false) {
                try10--;
            }
        }
    }
    if (remainLetters == 0) {
        findBoolean == false
        console.log("Congrats! You win!")
    }
}

hangingGame();