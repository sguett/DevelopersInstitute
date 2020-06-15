// Exercise 1
// write a function compareToTen that takes a number
// as an argument and returns a Promise that tests
// if the value is less than or greater than the value 10

const compareToTen = (num) => {
    let p = new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + ' is greater than 10, success');
        } else {
            reject(num + ' is less than 10, error');
        }
    })
    return p;
}

compareToTen(Math.floor(Math.random() * 21))
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });


// Exercise 2
// Write two functions that use Promises that you can chain!
// the first function:
// makeAllCaps(), will take in an array of arrayOfWords
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.


const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        let capsArray = array.map(word => {
            if (typeof word === 'string') {
                return word.toUpperCase();
            } else {
                reject('Error: Not all items are strings')
            }
        })
        resolve(capsArray)
    })
};

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        if (array) {
            resolve(array.sort())
        } else {
            reject('Error: something get wrong with the array')
        }
    })
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

makeAllCaps(arrayOfWords)
    .then(result => {
        return sortWords(result);
    })
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

makeAllCaps(complicatedArray)
    .then(result => {
        return sortWords(result);
    })
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });