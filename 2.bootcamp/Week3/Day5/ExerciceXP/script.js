// Exercise 1
// Given two numbers, console.log true if the sum of both numbers is less than 100. Otherwise console.log false.

let x = parseFloat(prompt("give me a number"));
let y = parseFloat(prompt("give me a second number"));

if (x + y < 100) {
    console.log(true);
} else { console.log(false) }

// Exercise 2
// Console.log the remainder from two numbers

console.log(x % y);

// Exercise 3
// Given two integers, a and b, console.log true if a can be divided evenly by b. Return false otherwise.

let var1 = parseFloat(prompt("give me a number"));
let var2 = parseFloat(prompt("give me a second number"));

function dividesEvenly(first, second) {
    if (first % second == 0) {
        return true;
    } else { return false }
}

dividesEvenly(var1, var2);

// Exercise 4
// Ask the user for a number
// Check if an array contains this given number.

let arr1 = [1, 2, 3, 10, 20, 30, 100, 200, 300]
let var3 = parseFloat(prompt("give me a number"));
let check = arr1.includes(var3);
console.log(check);
// other method
for (i = 0; i < arr1.length; i++) {
    if (var3 == arr1[i]) {
        console.log("array contains number");
        break;
    } else { j = j + 1; }
}