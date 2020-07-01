// const a = 9;
// const b = 10;

// console.log(a + b);

// let str = 'java';
// let str2 = 'script';

// console.log(str + str2);

// let arr = [2, 3, 4, 5, 6];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// setTimeout(() => {
//     console.log('wait 3 seconds');
// }, 3000);

// console.log('haha');
// console.log('Samuel');

// let a = "let's take a break";
// let b = "I thought we never do it";
// console.log(a + ' ' + b);

// const mdl = require('./script2.js');
// console.log(mdl.arr[2]);

// const ax = require('axios');

// const getUsers = async () => {
//     try {
//         const res = await ax.get('https://jsonplaceholder.typicode.com/users')
//         const users = await res.data;
//         console.log(users);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// getUsers()

const my_usr = require('./users.js');
my_usr.usrs()
    .then(data => console.log(data))
    .catch(err => console.log(err))
