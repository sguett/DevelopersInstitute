// Daily Challenge
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove the Banana from the array.
// Sort the array in order.
// Put “Kiwi” at the end of the array.
// Remove “Apples” from the array.
// Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// you should have at the end:
// [“Kiwi”, “Oranges”, “Blueberries”]

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.splice(0, 1);
array.sort();
array.push("Kiwi");
array.splice(0, 1);
array.reverse();

// Using this array :
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access “Oranges”.

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0])