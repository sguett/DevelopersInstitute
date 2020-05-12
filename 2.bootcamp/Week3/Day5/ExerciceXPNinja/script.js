// XP Ninja

// Exercise 1 : is_Blank
let test1 = "aaa";
let test2 = "";

function is_blank(str) {
    if (str == "") {
        return true;
    } else {
        return false;
    }
}

console.log(is_blank(test1));
console.log(is_blank(test2));


// Exercise 2 : abbrev_name

let test3 = "Samuel Guetta";

function abbrev_name(str) {
    let strSplit = str.split(" ");
    let newStr = strSplit[0] + " " + strSplit[1].slice(0, 1) + ".";
    return newStr;
}

console.log(abbrev_name(test3));

// Exercise 3 : swapCase

let test4 = "The Quick Brown Fox";

function swapCase(str) {
    let strSplit = str.split("");
    let newStr = ""
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i] == strSplit[i].toUpperCase()) {
            newStr = newStr + strSplit[i].toLowerCase()
        } else { newStr = newStr + strSplit[i].toUpperCase() }
    }
    return newStr;
}

console.log(swapCase(test4));

// Exercise 4: randomLargest()

function randomLargest() {
    let numbRand = [Math.round(Math.random() * 101), Math.round(Math.random() * 101), Math.round(Math.random() * 101)];
    console.log(numbRand)
    return Math.max(...numbRand);
}

console.log(randomLargest());

// Exercise 5: randomEven()

function randomEven() {
    let numbRand = Math.round(Math.random() * 101);
    for (i = 0; i <= numbRand; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

console.log(randomEven());

// Exercise 6 : Calculation

function calculation() {
    let elements = [];
    for (i = 0; i <= 500; i++) {
        if (i % 23 == 0) {
            elements.push(i);
        }
    }
    console.log("Elements : " + elements.join(" "));
    console.log("Sum : " + elements.reduce((a, b) => a + b, 0))
}

console.log(calculation());

// Exercise 7 : What’s the output without running the code ?

// I. 
var num = 8;
var num = 10;​
console.log(num); // return num = 10;
​
// II.
console.log(3 + 4 + '5'); // return 75

// Exercise 8 : Is palindrome?

function palindrome() {
    var entree = prompt("Veillez saisir votre mot").toLowerCase();
    entree_1 = [...entree].reverse().join('');

    if (entree === "") {
        console.log('Veuillez saisir un mot d\'abord');
    } else if (entree === entree_1) {
        console.log(entree + ' est un palindrome');
    } else {
        console.log(entree + ' n\'est pas un palindrome');
    }
}

palindrome();

// Exercise 9






// XP Ninja : the average
var average = {
    student: null,
    score: 0
};

var course = {};

average.student = prompt("What is your name?");

// var name_course = prompt("Give me a name of the course", "");
// var grade_course = Number(prompt("how much do you think you'll get for this course", ""));
// var coeff_course = Number(prompt("Give me the coefficient for this course", ""));

while (true) {
    let name_course = prompt("Give me a name of the course");
    let grade_course = Number(prompt("how much do you think you'll get for this course", ""));
    let coeff_course = Number(prompt("Give me the coefficient for this course", ""));
    course[name_course] = [grade_course, coeff_course];
    if (confirm("Do you want to add another course") == false) { break };
}

average.courses = course;
let list = Object.getOwnPropertyNames(average.courses)
for (i of list) {
    average.score += average.courses[i][0] * average.courses[i][1]
}
average.score = (average.score / list.length).toFixed(2);
alert("The average score for " + average.student + " is: " + average.score)