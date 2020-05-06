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