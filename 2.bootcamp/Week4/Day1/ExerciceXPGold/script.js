var i = 0;
var bool = false;

function playTheGame() {
    let verif = confirm('Are you sure you want to play?');
    bool = false;
    i = 0;
    var computerNumber = Math.floor(Math.random() * 11);
    if (verif == true) {
        while (bool == false) {
            var numb = parseInt(prompt("Give me a number between 0 and 10"));
            if (isNaN(numb)) {
                alert("Sorry Not a number, Goodbye");
                break;
            } else if (numb < 0 || numb > 10) {
                alert("Sorry it's not a good number,Goodbye");
                break;
            } else {
                test(numb, computerNumber);
            }
        }
    } else {
        alert("No problem, Goodbye")
    }
}

function test(myNumber, computerNumber) {
    if (myNumber == computerNumber) {
        alert("Congrats, you won!");
        i = 0;
        bool = true;
        return bool;
    } else if (myNumber > computerNumber) {
        alert("Your number is bigger. Guess again");
        i++;
    } else if (myNumber < computerNumber) {
        alert("Your number is lower. Guess again");
        i++;
    }
    if (i == 3) {
        alert("You can't try again. The good number in my mind is " + computerNumber)
        i = 0;
        bool = true;
        return bool;
    }
}