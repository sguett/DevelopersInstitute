const array = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// Create an array using forEach that has all the usernames with a“!”to each of the usernames

array.forEach((number) => {
    number.username = number.username + "!";
    console.log(number.username);
});

// Create an array using forEach that has all the usernames of the players which score is bigger than 5. Use ternary operator

let newArray = [];
array.forEach((number, i) => { return number.score > 5 ? newArray[i] = number.username : newArray[i] = "" })
console.log(newArray)

// Find the total score of the users, and display it

var total = 0;
array.forEach((number) => {
    total += number.score
})
console.log(total)