// Exercice 1
// 2 ways for example
const addFunc = (a, b) => a + b
addFunc(2, 2);

const addFunc2 = new Function('a', 'b', 'return a+b')
console.log(addFunc2(2, 2))

// Exercise 2

const addTo = x => y => x + y;
var addToTen = addTo(10); // addToTen equal y => 10 + y
addToTen(3); // y=3 so output is 13

// Exercise 3

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // return (30) => (1) => 30 + 1 , so output is 31

// Exercise 4

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5) // add5 = (b) => 5 + b
add5(12) // add5 = 12 + 5, so output is 17

// Exercise 5

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // add1(add5(10)) ==> add1(10+5) ==> 15 + 1, so output is 16