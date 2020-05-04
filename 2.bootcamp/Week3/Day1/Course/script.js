// Exercise 1

let addressNumber = 31;
let addressStreet = "Avenue Montaigne";
let country = "France";
let global_address = "I live in " + addressStreet + " " + addressNumber + ",in " + country;

console.log(global_address);

// Exercise 2

let birthyear = 1988
let futureyear = 2020
let age = (futureyear - birthyear)
let global_age = "I will be " + age + " in " + futureyear

console.log(global_age);

// Exercise 3

let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];
console.log(pets[1]);
pets.splice(3, 1, "horse");
// pets[3] = "horse";
// console.log(pets);
console.log(pets.length);