// let array = ["blue", "red", "yellow"];
// array.forEach((val, index) => {
//     console.log(`My #${index+1} favorite color is ${val}`)
// })

// let oldArr = [1, 2, 3, 4]
// let newArr = oldArr.map((val, index, arr) => {
//     return val + 1
// })

// console.log(newArr)
// console.log(oldArr)

// let oldArr = [1, 2, 3, 4]
// let newArr = oldArr.map((val) => val)

// console.log(newArr)
// console.log(oldArr)

// newArr === oldArr ? true : false;

// newArr[0] = "hello"
// console.log(newArr)
// console.log(oldArr)

myArr = [10, 20, 30, 40]; // create an array with some values

let newArr = myArr.map((val, i, arr) => { // building a new array from myArr
    return { // return value and index of myArr
        value: val,
        index: i
    };
});

let oldArr = [
    { name: "John", lastname: "Doe" },
    { name: "John", lastname: "Smith" }
]

let newArr = oldArr.map((val) => {
    console.log("val", val)
    if (val["lastname"] == "Doe") {
        return val
    }
});

console.log("newArr", newArr);
// we have undefined
// it's complicated to use map method with if. Map is made to create not to filter.

// use the filter method

let oldArr = [
    { name: "John", lastname: "Doe" },
    { name: "John", lastname: "Smith" },
    { name: "Jane", lastname: "Doe" }
]

let newArr = oldArr.filter((val) => {
    return val["lastname"] == "Doe"
});

//

let party = [{
        desert: 'Chocolate Mousse',
        calories: 30,
    },
    {
        desert: 'Apple Pie',
        calories: 15,
    },
    {
        desert: 'Croissant',
        calories: 50,
    },
    {
        desert: 'Strawberry Icecream',
        calories: 5,
    },
]

let partyFilter = party.filter((val) => { return val["desert"] != "Apple Pie" })
console.log(partyFilter)
let sumDesert = partyFilter.reduce((acc, val) => acc + val.calories, 0)
console.log(sumDesert)