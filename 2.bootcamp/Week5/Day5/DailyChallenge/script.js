// Write a JavaScript program to construct the following pattern, using a nested for loop.

let str = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
    str = "";
}

// Write a JavaScript program to construct the following pattern, using a nested for loop.

let rows = 5
for (var i = 0; i < rows; i++) {
    let str2 = ""
    for (var j = 1; j < rows - i; j++) {
        str2 += ' ';
    }
    for (var k = 1; k <= (2 * i + 1); k++) {
        str2 += '*';
    }
    console.log(str2);
}