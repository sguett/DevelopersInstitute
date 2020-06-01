// Exercise 1
// -- -- --1-- -- --
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits]; // result = ['bread','carrot','potato','chicken','apple','orange']
console.log(result);

// -- -- --2-- -- --
const country = "USA";
console.log([...country]); // ['U','S','A']
// -- -- --Bonus-- -- --
var newArray = [...[, , ]];
console.log(newArray); // [undefined, undefined]

// Exercise 2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// Use the map() method to say hello to the users. Use only their firstname
let hello = users.map((val) => { return "hello " + val["firstName"] })
console.log(hello);
// Use the filter() method to congratulate only the Full Stack Residents
let usersFilter = users.filter((val) => { return val["role"] == "Full Stack Resident" })
let helloFullStack = usersFilter.map((val) => { return "Congrats " + val["firstName"] + "!" })
console.log(helloFullStack)

// Exercise 3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
epic.reduce((acc, val) => acc + " " + val)

// Exercise 4

let student = [{ name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

let studFilter = student.filter((val) => { return val["isPassed"] == true })
let congratsPassed = studFilter.map((val) => { return "Congrats " + val["name"] + "!" })
console.log(congratsPassed)