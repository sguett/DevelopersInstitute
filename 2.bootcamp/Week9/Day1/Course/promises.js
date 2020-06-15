// console.log("lesson about promises")
// Syntax 1
// const promise = new Promise(function (resolve, reject) {
// })

// Syntax 2 (most common)
// const promise = new Promise((resolve, reject) => {
// })

// const flip = () => {
//     let x = (Math.floor(Math.random() * 2) == 0);
//     if (x) {
//         return 'head';
//     } else {
//         return 'tail';
//     }
// }

// const flipACoin = new Promise((resolve, reject) => {
//     const flipResult = flip();
//     if (flipResult) {
//         resolve();
//     } else {
//         reject();
//     }
// })

// console.log('1 ', 'I am about to flip a coin');

// const flipACoin = new Promise((resolve, reject) => {
//     // console.log('I am flipping the coin');
//     const flipResult = flip();
//     if (flipResult) {
//         resolve(`Here is the coin flip result ${flipResult}`)
//     } else {
//         reject();
//     }
// })

// change/fetch result
// flipACoin
//     .then(result => {
//         return result;
//     })
//     .then(result => {
//         return result + ' 1';
//     })
//     .then(result => {
//         console.log(result + ' 2')
//     })

// flipACoin.then((result) => {
//     console.log('2 ', result)
// })
//     .catch(err => {
//         console.log('something happen');
//     })
//     .finally(() => {
//         console.log('Haha')
//     })


// console.log('3 ', 'I have fliped a coin')

// const sample = () => {
//     try {
//         const a = 1;
//         const b = 2;
//         return a + b;
//     }
//     catch (err) {
//         console.log(err)
//     }
//     console.log('blabla');
// }

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 2000)
// })
//     .then((result) => {
//         console.log('done 1')
//     })
//     .then((result) => {
//         setTimeout(() => {
//             console.log('done 2');
//         }, 5000)
//     })
//     .then(() => {
//         console.log('done 3');
//     })
// output : done 1, done 3, done 2

// Exercise 1
// write a function compareToTen that takes a number
// as an argument and returns a Promise that tests
// if the value is less than or greater than the value 10

// const compareToTen = (num) => {
//     let p = new Promise((resolve, reject) => {
//         if (num > 10) {
//             resolve(num + ' is greater than 10, success');
//         } else {
//             reject(num + ' is less than 10, error');
//         }
//     })
//     return p;
// }

// compareToTen(8)
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });


// Exercise 2
// Write two functions that use Promises that you can chain!
// the first function:
// makeAllCaps(), will take in an array of arrayOfWords
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.


// const makeAllCaps = (array) => {
//     return new Promise((resolve, reject) => {
//         let capsArray = array.map(word => {
//             if (typeof word === 'string') {
//                 return word.toUpperCase();
//             } else {
//                 reject('Error: Not all items are strings')
//             }
//         })
//         resolve(capsArray)
//     })
// };

// const sortWords = (array) => {
//     return new Promise((resolve, reject) => {
//         if (array) {
//             resolve(array.sort())
//         } else {
//             reject('Error: something get wrong with the array')
//         }
//     })
// }

// const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
// const complicatedArray = ['cucumber', 44, true]

// makeAllCaps(complicatedArray)
//     .then(result => {
//         return sortWords(result);
//     })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// Promise.all
// Promise.allSettled
// Promise.race

// const promise1 = new Promise((resolve, reject) => {
//     resolve('Resolved promise1')
// })

// const promise2 = new Promise((resolve, reject) => {
//     reject('Reject promise2')
// })

// const promise3 = new Promise((resolve, reject) => {
//     resolve('Resolved promise3')
// })

// if one of the promises is rejected, we catch just this
// Promise.all([promise1, promise2, promise3])
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// we have all the results
// Promise.allSettled([promise1, promise2, promise3])
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// you have just the first one has resolve
// Promise.race([promise1, promise2, promise3])
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// fetch

fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => {
        return result.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })