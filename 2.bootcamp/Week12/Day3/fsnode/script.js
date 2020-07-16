const fs = require('fs');
// console.log(fs);

// read file - async
// fs.readFile('./data', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
// });

// console.log('after');

// read file - sync
// const f = fs.readFileSync('./data');
// console.log(f.toString());
// console.log('after');

// append - add data to file
// let text = ' 123456826'
// fs.appendFile('./data', text, err => {
//     if (err) {
//         console.log(err);
//     }
// });

//write - create a data file
// let txt = ' 123456826'
// fs.writeFile('./data1', txt, err => {
//     if (err) {
//         console.log(err);
//     }
// })

//write an obj - create a data file
// let obj = {
//     name: 'sam',
//     lastname: 'guetta'
// }
// fs.writeFile('./data2.json', JSON.stringify(obj), err => {
//     if (err) {
//         console.log(err);
//     }
// })

// read a json file
// const f = fs.readFileSync('./data2.json');
// let obj = JSON.parse(f.toString())
// console.log(obj.name);

// delete
// fs.unlink('./data1', err => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('data1 was deleted');
//     }
// })

// copy
// fs.copyFile('./data2.json', 'sam.json', err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Ok, copy the file');
// })