var num = 8; // initialize var num with value equal 8
var num = 10; // re-declare var num with value equal 10

console.log(num); // output: 2

///

function checkAge(age) {
    if (age < 18) { // 2. test function. Age = 21, so this condition is false
        const message = "Sorry, you're too young.";
    } else {
        const message = "Yay! You're old enough!"; // 3. output : message  = "Yay! You're old enough!"
    }

    return message; // 4. Doesn't work becasuse we declared a const message and message can only be accessed in the block in which they are defined.
}

console.log(checkAge(21)); // 1. call function checkAge with value 21 ==> Output : message is not defined


/// 

function numbers() {
    for (var i = 0; i < 5; i += 1) { // 2. begin the for loop with VAR ==> Change VAR by LET if we want "Uncaught ReferenceError: i is not defined" as output
        console.log(i); // 3. output : 0, 1, 2, 3, 4
    }
    console.log(i); // 4. output : 5
}
numbers(); // 1. Call function numbers() => output : 5


///

// Create a function to check the year given by the user
// If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

function testYear(year) {
    return year > 2000 ? "You are in the 21st century" : "You live in the Middle Age"
}

let year_user = parseInt(prompt("what's your year birthday?"))
console.log(testYear(year_user))

// Using arrow function and ternary operator create a calculator that returns the result of the calculus depending on the operator : +, - , * ,
// The functions should be able to to take parameters : 2 numbers and the operator (+, - or *)

function calculator(n1, n2, op) {
    return op === "+" ? n1 + n2 : op === "-" ? n1 - n2 : n1 * n2
}

console.log(calculator(2, 5, "*"))

//
// Check for each number if they are even or not

let myArr = [10, 11, 12, 15, 20]
myArr.forEach((number) => {
    console.log(number % 2 == 0 ? number + " is even" : number + " is odd")
})

//
// Check if at least one element of the array starts with the letter 'h'

let myArr = ["wow", "hey", "bye"]

myArr.some((value) => { return (value[0] == "h") })

//
// Check if all the elements of the array start with the letter 'h'

let myArr = ["hello", "hey", "haloa"]

myArr.every((value) => { return (value[0] == "h") })