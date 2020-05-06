// EXERCICE XP : CONDITIONALS

// Create a variable newDog that is equal to “Chihuahua”
let newDog = "Chihuahua";

// Check and display how many letters are in newDog
console.log(newDog.length);

// Display the newDog variable in uppercase and then in lowercase
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

// Check if the variable newDog equals to “Chihuahua”
// if it equals to ‘Chihuahua’, display ‘I LOVE Chihuahua, it’s my favorite dog’
// else, console.log ‘I dont care, I prefer CATS’
if (newDog == 'Chihuahua') {
    console.log('I LOVE Chihuahua, it’s my favorite dog')
} else {
    console.log('I dont care, I prefer CATS')
};

///////////////////////////////////////////////////////////////////////////
// EXERCICE XP : OBJECTS & LOOP

// Exercise 1 : Your favorite colors
// Create an array to hold your top colors
// For each choice, console.log a string like: “My #1 choice is blue.”
// Bonus: Change it to log “My 1st choice, “My 2nd choice”, “My 3rd choice”, picking the right suffix for the number based on what it is.

let favcol = ["Blue", "Black", "Red"];
for (let i = 0; i < favcol.length; i++) {
    let j = i + 1
    if (j == 1) {
        console.log('My ' + (j) + 'st choice is ' + favcol[i]);
    } else if (j == 2) {
        console.log('My ' + (j) + 'nd choice is ' + favcol[i]);
    } else {
        console.log('My ' + (j) + 'rd choice is ' + favcol[i]);
    }
}

// Exercise 2 :
// Ask a number to the user, while the number is smaller than 10, ask him for a new number

let number = parseFloat(prompt('Give me a number'));
while (number < 10) {
    // number++;
    number = prompt('The number is smaller than 10. Give me a new number');
}

// Exercise 3 :
// var people = ["Greg", "Mary", "Devon", "James"];
// Using a loop, iterate through this array and console.log all of the people.
// Write the command to remove “Greg” from the array.
// Write the command to replace “James” by “Jason” in the array.
// Write the command to add your name to the end of the array.
// Using a loop, iterate through this array and after console.log-ing “Mary”, exit from the loop.
// Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or your name.
// Write the command that gives the indexOf where “Mary” is located.Look on google what indexOfis
// Write the command that gives the indexOf where “Foo” is located (this should return -1).
// Write a variable last which value is the last element of the array
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

let people = ["Greg", "Mary", "Devon", "James"];
for (let x in people) {
    if (people[x] == 'Greg') {
        // delete people[x];
        people.splice(x, 1);
        console.log(people[x]);
    } else if (people[x] == 'James') {
        // people[x] = 'Jason';
        people.splice(x, 1, 'Jason');
        people.push('Samuel');
        console.log(people[x]);
    } else {
        console.log(people[x]);
    }
}

let people = ["Greg", "Mary", "Devon", "James"];
for (i of people) {
    console.log(i)
}

let index = people.indexOf("Greg");
people.splice(index, 1);
index = people.indexOf("James");
people.splice(index, 1, 'Jason');
people.push('Samuel');

for (i of people) {
    console.log(i);
    if (i == 'Mary') { break; }
}

let people2 = people.slice(1, 3);
console.log(people2);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

let item = people[people.length - 1];
console.log(item);

// Exercise 4 :
// var age = [20,5,12,43,98,55];
// 1. console.log the sum of all the elements of the array
// 2. console.log just the even numbers
// 3. Bonus: Return the largest number of the array

let age = [20, 5, 12, 43, 98, 55];
let sum = 0;
for (i of age) {
    sum += i;
}

for (j of age) {
    if (j % 2 == 0) {
        console.log(j);
    }
}

console.log(Math.max(...age));