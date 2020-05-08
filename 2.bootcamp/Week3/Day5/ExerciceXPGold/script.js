// Exercise 1
// Write a JavaScript conditional statement to sort three numbers.
// Display an alert box to show the result.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]

var x = 0;
var y = -1;
var z = 4;

if (x > y && x > z) {
    if (y > z) {
        alert(x + ", " + y + ", " + z);
    } else {
        alert(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        alert(y + ", " + x + ", " + z);
    } else {
        alert(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        alert(z + ", " + x + ", " + y);
    } else {
        alert(z + ", " + y + ", " + x);
    }
}

// with array in input

var numb = [0, -1, 4];

if (numb[0] > numb[1] && numb[0] > numb[2]) {
    if (numb[1] > numb[2]) {
        alert(numb[0] + ", " + numb[1] + ", " + numb[2]);
    } else {
        alert(numb[0] + ", " + numb[2] + ", " + numb[1]);
    }
} else if (numb[1] > numb[0] && numb[1] > numb[2]) {
    if (numb[0] > numb[2]) {
        alert(numb[1] + ", " + numb[0] + ", " + numb[2]);
    } else {
        alert(numb[1] + ", " + numb[2] + ", " + numb[0]);
    }
} else if (numb[2] > numb[0] && numb[2] > numb[1]) {
    if (numb[0] > numb[1]) {
        alert(numb[2] + ", " + numb[0] + ", " + numb[1]);
    } else {
        alert(numb[2] + ", " + numb[1] + ", " + numb[0]);
    }
}

// Exercise 2
// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
// Sample numbers : [3, -7, 2]
// Output : The sign is -

var numb2 = [3, -7, 2];

if ((numb2[0] * numb2[1] * numb2[2]) >= 0) {
    alert("The sign is +");
} else { alert("The sign is -"); }

// Exercise 3

// Write a JavaScript program which computes, the average marks of the following students;

let students = {
    david: 80,
    vinoth: 68,
    divya: 88,
    ishitha: 95,
    thomas: 68,
    lea: 120
}

function avgstud(var1) {
    let temp = 0;
    for (i = 0; i < Object.keys(var1).length; i++) {
        temp += Object.values(var1)[i];
        var Avgmarks = (temp / Object.keys(var1).length);
    }
    return (Avgmarks);
}

// Write a program to check which student has the best grade. Console.log the name of the student.

function bestgrade(var1) {
    let maxgrd = 0;
    let maxname = 0;
    for (i = 0; i < Object.keys(var1).length - 1; i++) {
        if (Object.values(var1)[i] >= Object.values(var1)[i + 1]) {
            if (maxgrd <= Object.values(var1)[i + 1]) {
                maxgrd = Object.values(var1)[i];
                maxname = Object.keys(var1)[i];
            }
        } else if (maxgrd <= Object.values(var1)[i + 1]) {
            maxgrd = Object.values(var1)[i + 1];
            maxname = Object.keys(var1)[i + 1];
        }
    }
    console.log(maxname + ' has a best grade with ' + maxgrd);
    // return (maxgrd);
}

// Write a program to check which student has the worst grade. Console.log the name of the student.

function worstgrade(var1) {
    let worstgrd = Object.values(var1)[0];
    // let worstname;
    for (i = 0; i < Object.keys(var1).length - 1; i++) {
        if (Object.values(var1)[i] >= Object.values(var1)[i + 1]) {
            if (worstgrd >= Object.values(var1)[i + 1]) {
                worstgrd = Object.values(var1)[i + 1];
                var worstname = Object.keys(var1)[i + 1];
            }
        } else if (worstgrd >= Object.values(var1)[i + 1]) {
            worstgrd = Object.values(var1)[i + 1];
            var worstname = Object.keys(var1)[i + 1];
        }
    }
    console.log(worstname + ' has a worst grade with ' + worstgrd);
    // return (maxgrd);
}

// Write a program to check if a few students have the same grade. Console.log their names.

// function samegrade(var1) {
//     for (i = 0; i < Object.keys(var1).length; i++) {
//         for (j = 1; j < Object.keys(var1).length; j++) {
//             console.log("i", i, "j", j)
//             if ((Object.values(var1)[i] == Object.values(var1)[j]) && (Object.keys(var1)[i] != Object.keys(var1)[j])) {
//                 console.log(Object.keys(var1)[i] + ' and ' + Object.keys(var1)[j] + ' have the same grade with ' + Object.values(var1)[i]);
//                 break;
//             }
//         }
//     }
// }

function samegrade(var1) {
    arr = [];
    for (let i in var1) {
        for (let j in var1) {
            if (i != j && var1[i] == var1[j] && arr.includes(i) == false) {
                arr.push(i);
            }
        }
    }
    console.log(arr);
}