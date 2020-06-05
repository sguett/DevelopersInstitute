// reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
// reverseArray([1,2]) // [2,1]
// reverseArray([]) // []
// reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1]

// method 1
function reverseArray(arr){
  return arr.reverse();
}
reverseArray([1,2,3,4,5,6,7,8,9,10])

// method 2
function reverseArray2(arr){
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

reverseArray2([1,2,3,4,5,6,7,8,9,10])

// method 3

function reverseArray3(arr){
  return arr.reduce((accumulator, value) => {
    return [value, ...accumulator]
  }, []);
};

reverseArray3([1,2,3,4,5,6,7,8,9,10])