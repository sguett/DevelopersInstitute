// Exercise 1

let sum = prompt("How much do you have in the account?");
const vat = 1.17;
let balance = ["+50", "-100", "+75", "-25", "+200", "-50"]
const processBalance = (balance) => {
    balance.forEach((val, ind, arr) => {
        if (val[0] != "+") {
            arr[ind] = `${parseInt(val,10)*vat}`
        }
    });
}

function doAccounting(account, balance) {
    account = parseInt(account, 10)
    processBalance(balance);
    balance.forEach((val) => account = account + parseInt(val, 10));
    return account;
}

doAccounting(sum, balance)

// Exercise 2

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
color.forEach((val, ind) => { console.log(`#${ind+1} choice is ${val}`) });

// Exercise 3

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinal = ["th", "st", "nd", "rd"];
color.forEach((val, ind) => {
    console.log(ordinal[ind] !== undefined ? `#${ind+1+ordinal[ind]} choice is ${val}` : `#${ind+1+ordinal[ordinal.length-1]} choice is ${val}`)
});

// Exercise 4

function is_string(arg) {
    let array = [arg];
    console.log(array)
    let sum = 0;
    array.forEach((arr, i) => { sum += arr[i] })
    return sum > 0 ? "not string" : "string";
}

console.log(is_string("hello"))