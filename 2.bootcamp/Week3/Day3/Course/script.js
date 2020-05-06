// Exercice 2
// Write as comments the steps of the resolution of this piece of code
// Guess what will be the result before checking it

let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
        // Result is here and break
    case 5:
        alert('Too large');
        break;
    default:
        alert("I don't know such values");
}

// Exercice 2
// Write as comments the steps of the resolution of this piece of code
// Guess what will be the result before checking it

let b = 2 + 2;

switch (b) {
    case 4:
        alert('Right!');
        break;
        // Result is here and break
    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}


// Objects & Loops 
// Exercise 1
// Create a stuctured html file linked to a JS file
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the array "database".
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let auth = {
    username: "Samuel",
    password: "toto"
}

let database = [user];

let newsfeed = [{ username: "Username", timeline: "Timeline" }, { username: "Username", timeline: "Timeline" }, { username: "Username", timeline: "Timeline" }]


// Exercise 2
for (let i = 0; i < 16; i++) {
    if (i % 2 == 0) {
        console.log('Even Number');
    } else {
        console.log('Odd Number');
    }
}

// Exercise 3
var names = ["john", "sarah", 23, "Rudolf", 34];
for (let x of names) {
    if (typeof x == 'string') {
        if (x[0].toUpperCase() == x[0]) {
            console.log("Yes, first letter is already uppercase")
        } else { console.log(x[0] = x[0].toUpperCase() + x.slice(1)) }
    }
}

// other examples
// For loops in an array of objects
let blogs = [{
        user: "John",
        title: "I love Js",
        text: "wowwwwwwwww --- Objectssss"
    },
    {
        user: "Jane",
        title: "I love chocolate",
        text: "Cookies my favorite"
    },
    {
        user: "David",
        title: "I love CSS",
        text: "blue, white, red ...."
    },
]​
for (let i = 0; i < blogs.length; i++) {
    console.log(`${blogs[i][user]} wrote a post with the title ${blogs[i][title]}. The content of the post is ${blog[i][text]}`)
}​
for (let x of blogs) {
    console.log(`User ${x.user} wrote a post with a title of ${x.title}. The text reads: ${x.text}`)
}