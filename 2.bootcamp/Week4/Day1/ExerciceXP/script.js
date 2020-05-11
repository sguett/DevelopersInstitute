// Exercice 1

function checkDriverAge() {
    var age = prompt('What is your age ? ');

    if (Number(age) < 18) {
        return 'Sorry, you are too young to drive this car.Powering off';
    } else if (Number(age) > 18) {
        return 'Powering On.Enjoy the ride!';
    } else if (Number(age) === 18) {
        return 'Congratulations on your first year of driving.Enjoy the ride!';
    }
}

function checkDriverAge(age) {
    // var age = prompt('What is your age ? ');
    if (Number(age) < 18) {
        return 'Sorry, you are too young to drive this car.Powering off';
    } else if (Number(age) > 18) {
        return 'Powering On.Enjoy the ride!';
    } else if (Number(age) === 18) {
        return 'Congratulations on your first year of driving.Enjoy the ride!';
    }
}

// Exercice 2

var amazonBasket = {
        glasses: 1,
        books: 2,
        floss: 100
    }
    // first version
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
checkBasket();

// second version
function checkBasket2() {
    let item = prompt('Wich item you want?');
    if (item in amazonBasket) {
        return ('The item asked is in the basket');
    } else { return ('The item asked is not in the basket'); }
}
checkBasket2();

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
    let total_price = 0;
    for (elem of shoppingList) {
        if (stock[elem] > 0) {
            stock[elem] = stock[elem] - 1;
            total_price += prices[elem];
        }
    }
    return total_price;
}
myBill();

// Exercise 4

let days_vacs = parseInt(prompt("How many days do you want to go?"));
let city_vacs = prompt("For which destination: Paris, London, Other ?")

function hotel_cost(nights) {
    let hotel_price = 120;
    return ((nights * hotel_price) + '$');
}

function plane_ride_cost(city) {
    while (city == "") {
        city = prompt("For which destination: Paris, London, Other ?");
    }
    if (city == 'London') {
        return 'London : 183$';
    } else if (city == 'Paris') {
        return 'Paris : 220$';
    } else {
        return city + ' : 300$';
    }
}

function rental_car_cost(days) {
    let rent_cost = 40;
    return ((days * rent_cost) + '$');
}

alert("Flight costs to " + plane_ride_cost(city_vacs) + ", Price Hotel: " + hotel_cost(days_vacs) + ", Car Cost: " + rental_car_cost(days_vacs));