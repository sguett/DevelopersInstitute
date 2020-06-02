// Exercise 1
[1, 2, 3].map(num => {
    if (typeof num === 'number') return; // output [undefined,undefined,undefined] because all numbers in array are typeof 'number'
    return num * 2;
});

// Exercise 2
[
    [0, 1],
    [2, 3]
].reduce(
    (acc, cur) => {
        return acc.concat(cur); // 2. cur = [0,1] => acc = [1,2,0,1] // 3. cur = [2,3] => acc = [1,2,0,1,2,3]
    }, [1, 2], // 1. acc = [1,2]
); // output [1,2,0,1,2,3]

// Exercise 3
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
        console.log(num, i);
        alert(num);
        return num * 2;
    })
    // what is the value of i? ==> i is the index of array so i = 0, 1, 2, 3, 4, 5
    // Make this map function pure:
const newArrayPure = arrayNum.map((num, i) => { return num * 2 })

// Exercise 4
// Turn this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] into a this new array: [1,2,3,[4],[5]].
const array = [
    [1],
    [2],
    [3],
    [
        [
            [4]
        ]
    ],
    [
        [
            [5]
        ]
    ]
]
array.map((val, i) => {
    if (i < 3) {
        return val[0]
    } else { return val[0][0] }
})

// Turn this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; into this new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
    ["Hello", "young", "grasshopper!"],
    ["you", "are"],
    ["learning", "fast!"]
];

greeting.map((val) => {
    return val.reduce((acc, cur) => { return acc + " " + cur })
})

// Exercise 5

// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’
let temp = greeting.map((val) => {
    return val.reduce((acc, cur) => { return acc + " " + cur })
})

temp.reduce((acc, val) => { return acc + " " + val })

// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const trapped = [
    [
        [
            [
                [
                    [
                        [
                            [
                                [
                                    [
                                        [
                                            [
                                                [
                                                    [
                                                        [
                                                            [
                                                                [
                                                                    [
                                                                        [
                                                                            [
                                                                                [
                                                                                    [
                                                                                        [
                                                                                            [
                                                                                                [
                                                                                                    [3]
                                                                                                ]
                                                                                            ]
                                                                                        ]
                                                                                    ]
                                                                                ]
                                                                            ]
                                                                        ]
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
]

trapped.flat(26)