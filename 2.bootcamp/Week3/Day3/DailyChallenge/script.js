// Daily challenge : Not Bad
// Create a string that has the word “not” and “bad” inside
// Create another variable that should find the first appearance of the substring ‘not’ and ‘bad’.
// If the ‘bad’ follows the ‘not’, then it should replace the whole ‘not’…’bad’ substring with ‘good’ than console.log the result.
// If it doesn’t find ‘not’ and ‘bad’ in the right sequence (or at all), just console.log the original sentence.

var var1 = "This dinner is not that bad!";
// var var1 = "This dinner is bad!";
var mySub1 = var1.indexOf("not");
var mySub2 = var1.indexOf("bad");


if (mySub1 == -1 || mySub2 == -1) {
    console.log(var1);
} else if (mySub1 < mySub2) {
    console.log(var1.replace(var1.slice(mySub1, mySub2 + (var1.length - mySub2)), "good!"));
}


// Daily challenge : Objects & Loop

const arr = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
let swap = 0;
for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length; j++) {
        if (arr[j - 1] < arr[j]) {
            swap = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = swap;
        }
    }
}

let arrString = arr.toString();
let joinString = arr.join("+");
console.log(joinString);

let joinString = arr.join("-");
console.log(joinString);

let joinString = arr.join(" ");
console.log(joinString);