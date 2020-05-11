// Exercise 1

let list = [1, 2, 3, 3, 3, 3, 4, 5];

function uniqueList(list) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        if (newList.includes(list[i]) == false) {
            newList.push(list[i]);
        }
    }
    return newList.sort();
}

uniqueList(list);

// Exercise 2

function biggestNumberInArray(arr) {
    let arrayTemp = []
    if (arr.length == 0) {
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (Number.isInteger(arr[i]) == true) {
                arrayTemp.push(arr[i]);
            }
        }
        return Math.max(...arrayTemp);
    }
}

const array = [-1, 0, 3, 100, 99, 2, 99]; // return 100
console.log(biggestNumberInArray(array));

const array2 = ["a", 3, 4, 2]; // return 4
console.log(biggestNumberInArray(array2));

const array3 = []; // return 0
console.log(biggestNumberInArray(array3));