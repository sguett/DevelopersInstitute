let [a, b] = [
    ["hello"],
    ["bye"]
]
let obj = [
    ["name", "john"],
    ["lastname", "doe"]
]
let entries = Object.entries(obj)
let [a, b] = entries
console.log("a", a)
console.log("a", b)

//
let myObj = {
    name: "John",
    lastName: "Doe",
    age: 25,
    friends: ["Mark", "Lucie", "Anet"]
}

console.log("nb keys: ", Object.keys(myObj).length)
console.log("nb values: ", Object.values(myObj).length)
let i = 1
for (let [key, value] of Object.entries(myObj)) {
    console.log(`The ${i}# key is : ${key} The ${i}# value is : ${value}`);
    i++
}

//
let obj = [{
    name: "john",
    lastName: "doe",
    pets: {
        number: 5,
        wantMore: false
    }
}, {
    name: "john",
    lastName: "doe",
    pets: {
        number: 5,
        wantMore: false
    }
}]

// function test(user) {
//     console.log(`${user.name} ${user.lastName}`)
//     console.log(`Number of pets: ${user.pets.number}`)
// }

function test({ name, lastName, pets: { number, wantMore } } = obj) {
    console.log(`${name} ${lastName}`)
    console.log(`Number of pets: ${number}`)
}

obj.forEach((val) => { return test(val) })

test(obj)

//

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin); // admin = {admin: true, name: 'Lydia', age: 21}

//
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit.type)
console.log(blackRabbit.type)
killerRabbit.speak("I'll kill you")
blackRabbit.speak("you'll never catch me.")