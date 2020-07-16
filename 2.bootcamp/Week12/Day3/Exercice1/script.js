// 1 - How many steps to the right or left you end with
// > - go right
// < - go left

const fs = require('fs');
const { time } = require('console');

// fs.readFile('./right-left', (err, data) => {
//     const direction = data.toString();
//     const arr = direction.split('');
//     let steps = 0;
//     console.time('timer');

//     arr.forEach(step => {
//         if (step === '>') {
//             steps++
//         }
//         else if (step === '<') {
//             steps--
//         }
//     })
//     console.timeEnd('timer')
//     console.log('forEach:', steps);
//     console.time('fortimer');
//     steps = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '>') {
//             steps++;
//         }
//         else if (arr[i] === '<') {
//             steps--;
//         }
//     }
//     console.timeEnd('fortimer')
//     console.log('For:', steps);
// })

// 2 - When is the first time you enter the left side -
// after how many steps

fs.readFile('./right-left', (err, data) => {
    const direction = data.toString();
    const arr = direction.split('');

    let steps = 0;
    let index = 0;

    console.time('timer');
    for (x of arr) {
        if (x === '>') {
            steps++
        }
        else if (x === '<') {
            steps--
        }
        index++;
        if (steps < 0) {
            break;
        }
    }
    console.timeEnd('timer');
    console.log(index);

})



