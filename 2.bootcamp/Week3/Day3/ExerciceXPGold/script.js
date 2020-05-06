// CONDITIONALS
// Exercise 1
// Ask a number to the user, and save it to a variable.
// Check if the variable is an even number
// If yes, display: “x is an even number’. Where x is the actual number of the user
// If no, display “x is not an even number’. Where x is the actual number of the user

let numb = parseFloat(prompt('Give me a number'));
if (numb % 2 == 0) {
    console.log(numb + ' is an even number');
} else {
    console.log(numb + ' is not an even number')
}

// Exercise 2
// Create 2 variables, x and y =. Each of them has a different numeric value
// Write an if/else statement that display the bigger number

let x = 5;
let y = 55;
if (x > y) {
    console.log(x + ' is the bigger number');
} else if (x < y) {
    console.log(y + ' is the bigger number');
}


// Exercise 3 : The World Translator : Use Switch Case
// Ask the user which language he speaks
// Create a few conditions :
// If he speaks French : display “Bonjour”
// If he speaks English : display “Hello”
// If he speaks Hebrew : display “Shalom”
// If he doesn’t speak none of these 3 languages: display ‘:)’

let language = prompt('Which language do you speak?');

if (language == 'French') {
    console.log('Bonjour');
} else if (language == 'English') {
    console.log('Hello');
} else if (language == 'Hebrew') {
    console.log('Shalom');
} else {
    console.log(':)');
}

// Exercise 4 : The Grade Assigner
// Ask the user for his grade
// If the score is bigger than 90, console.log ‘A’
// If the score is between 80 and 90, console.log ‘B’
// If the score is between 70 and 80, console.log ‘C’
// If the score is lower than 70, console.log ‘D’

let grade = parseFloat(prompt('What is your grade?'));

if (grade >= 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('C');
} else {
    console.log('D');
}


// OBJECTS & LOOPS
// Exercise 1
// Create an object called family with a few properties
// Display only the properties
// Display only the values

var family = {
    father: "Dad",
    mother: "Mom",
    child: "Son"
}

const prop = Object.keys(family)
console.log(prop)

const val = Object.values(family)
console.log(val)

// Exercise 2

var building = {
    number_levels: 4,
    number_of_apt_by_level: {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants: ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent: {
        "Sarah": [3, 2000],
        "Dan": [4, 1000],
        "David": [1, 10],
    },
}

console.log(building["number_levels"])
console.log(building["number_of_apt_by_level"]["1"]);
console.log(building["number_of_apt_by_level"]["3"]);
sum_appt_lvl_1_3 = building["number_of_apt_by_level"]["1"] + building["number_of_apt_by_level"]["3"];
console.log("The second tennant is: " + building.name_of_tenants[1] + ", he or she has " + building.number_of_rooms_and_rent[building.name_of_tenants[1]][0] + " rooms");

if ((building.number_of_rooms_and_rent["Sarah"][1] + building.number_of_rooms_and_rent["David"][1]) > building.number_of_rooms_and_rent["Dan"][1]) {
    console.log("Dan's rent is too low, he should pay more");
    building.number_of_rooms_and_rent["Dan"][1] = 3000;
}

// Exercise 3
// Create two objects, each one should hold a person details. Here are the details: fullName, mass, height.
// Each object should also have a property which value is a function that calculates the Body Mass Index (BMI) of each person
// Create a JS function that compare both the BMI. Display the name of the person that has the biggest BMI.

var person1 = {
    fullName: "Michel",
    mass: 80,
    height: 165,
    bmi: function() {
        return (this.mass / this.height);
    }
}

var person2 = {
    fullName: "Alain",
    mass: 70,
    height: 180,
    bmi: function() {
        return (this.mass / this.height);
    }
}

function calc_bmi_diff(p1, p2) {
    if (p1.bmi() > p2.bmi()) {
        console.log(p1.fullName + " have a higher BMI");
    } else if (p1.bmi() < p2.bmi()) {
        console.log(p2.fullName + " have a higher BMI");
    } else console.log("Oddly both of them have the same BMI")
}

calc_bmi_diff(person1, person2);