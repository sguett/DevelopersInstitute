// 3 ways to call a function
// function test() {

// }

// const test = () => {

// }

// let test = function() {
//     console.log(test)
// }

function test() {
    console.log('test')
}


function calculator(operator) {
    let result;

    //INNER
    function calculus(a, b) {
        operator === '+' ? result = a + b :
            operator === '-' ? result = a - b :
            result = 0;
    }
    calculus(1, 2);
    return result;
}

console.log("The result is ", calculator("+"))


//
function add() {
    let counter = 0; // Step 2: initialize counter at 0 ==> Counter = 0
    // INNER FUNCTION
    function plus() {
        counter += 1; // Step 4: increase counter by 1 ==> Counter = 1
        console.log(counter); // Step 5: display counter ==> Counter = 1
    }
    plus(); // Step 3: call plus()
}

add() // Step 1: call add() function. Ouput: 1

//
let add = (function() {
    let counter = 0; // Step 2: initialize counter at 0

    function calculus() {
        counter += 1; // Step 4: increase counter by 1 ==> Counter = 1
        return counter // Step 5: return counter ==> output 1
    }
    return calculus // Step 3: return inner function calculus
})();

add(); // Step 1: call function add // Step 6: output = 1 ==> add() = calculus() = counter = 1
add(); // Step 7: call function add ==> output = 2 ==> invocate calculus with counter=1, so counter=2
add(); // Step 8: call function add ==> output = 3 ==> invocate calculus with counter=2, so counter=3