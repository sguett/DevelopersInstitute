var i = 0;

function playTheGame() {
    let verif = confirm('Are you sure you want to play?');
    if (verif == true) {
        var numb = parseInt(prompt("Give me a number between 0 and 10"));
        if (isNaN(numb)) {
            alert("Sorry Not a number, Goodbye");
        } else if (numb < 0 || numb > 10) {
            alert("Sorry it's not a good number,Goodbye");
        } else {
            var computerNumber = Math.floor(Math.random() * 11);
        }
        test(numb, computerNumber);
    } else {
        alert("No problem, Goodbye")
    }
}

function test(myNumber, computerNumber) {
    if (myNumber == computerNumber) {
        alert("Congrats, you won!");
        i = 0;
    } else if (myNumber > computerNumber) {
        alert("Your number is bigger. Guess again");
        i++;
    } else if (myNumber < computerNumber) {
        alert("Your number is lower. Guess again");
        i++;
    }
    if (i >= 3) {
        alert("You can't try again. The good number in my mind is " + computerNumber)
        i = 0;
    }
}