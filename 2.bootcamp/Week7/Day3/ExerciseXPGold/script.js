// Exercise 1
// Write a function called printFullName which accepts an object and returns the string “Your full name is” concatenated with the value of the first key and a space and then the value of the last key.
// See if you can destructure this object DIRECTLY from the parameters.
// The output of the printFullName function should be the exact same as the displayStudentInfo function.

function printFullName({ first, last }) {
    console.log("Your full name is " + first + " " + last);
}

printFullName({ first: 'Elie', last: 'Schoppik' })

// Exercise 2

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}

const counterOne = new Counter();
counterOne.increment(); // count = 1
counterOne.increment(); // count = 2

const counterTwo = counterOne;
counterTwo.increment(); // count = 3

console.log(counterOne.count); // output : 3