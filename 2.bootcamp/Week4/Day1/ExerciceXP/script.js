// Exercice 1

function checkDriverAge() {
    var age = prompt('What is your age ? ');

    if (Number(age) < 18) {
        alert('Sorry, you are too yound to drive this car.Powering off');
    } else if (Number(age) > 18) {
        alert('Powering On.Enjoy the ride!');
    } else if (Number(age) === 18) {
        alert('Congratulations on your first year of driving.Enjoy the ride!');
    }
}

// Exercice 2

var amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
    let itemAsk = prompt('Wich item you want?');
    let count = 0;
    for (let item in amazonBasket) {
        if (item == itemAsk && amazonBasket[item] != 0) {
            return ('The item asked is in the basket');
        } else {
            count++;
        }
    }
    if (count == Object.keys(amazonBasket).length) {
        return ('The item asked is not in the basket');
    }
}


function checkBasket2() {
    let item = prompt('Wich item you want?');
    if (item in amazonBasket) {
        return ('The item asked is in the basket');
    } else { return ('The item asked is not in the basket'); }
}

// Exercise 3

var shoppingList = ["banana", "orange", "apple"];
var stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

var prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

function myBill() {
    for (i = 0; i < shoppingList.length(); i++) {
        for (let x in stock, prices) {
            if (x == shoppingList[i] && stock[x] != 0) {

            }

        }
    }

}