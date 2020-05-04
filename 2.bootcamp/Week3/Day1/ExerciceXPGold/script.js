// Exercice 1
// 1. Write a simple JavaScript program to join all elements of the following array into a string.

let me = ["my", "favorite", "color", "is", "blue"]
array = me[0] + " " + me[1] + " " + me[2] + " " + me[3] + " " + me[4]
console.log(array)

// Exercice 2: MixUp
// Create two strings,
// Create a variable which value is the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.

let str1 = "mix";
let str2 = "pod";
let newWord = str2.substring(0, 2) + str1.substring(3, 2) + " " + str1.substring(0, 2) + str2.substring(3, 2);
console.log(newWord);


// Exercice 3: Calculator
// Make a Calculator using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.
// BONUS: Make a program that can subtract, multiply, and also divide!

let first_numb = parseFloat(prompt("Enter a number", ""));
let second_numb = parseFloat(prompt("Enter a second number", ""));
let operator = prompt("Choose your operator : + , * , / , - ", "");
let answer = eval(first_numb + operator + second_numb);
alert("The answer is " + answer);