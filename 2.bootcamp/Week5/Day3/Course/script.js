// function inputTest() {
//     let form = document.forms[0];
//     let input = form.elements[0];
//     let inputValue = input.value;
//     return inputValue;
// }

// function sayHi(username) {
//     let divAlert = document.createElement('div');
//     divAlert.setAttribute("class", "test");
//     let alert = document.createTextNode(`${username} you have 20min left to save your cart`);
//     divAlert.append(alert);
//     document.body.appendChild(divAlert);
// }

// setTimeout(sayHi, 2000, inputTest());

// exercise 1

function banner(phrase) {
    let div = document.createElement("div");
    div.textContent = phrase;
    document.body.appendChild(div);
}

setTimeout(banner, 5000, "The sales end in 10min !");


// exercise 2
let div = document.createElement("div");
div.textContent = 'The sales end in ';
let span = document.createElement("span");
span.textContent = 11;

function bannerCount() {
    let currenTime = parseFloat(span.textContent);
    div.appendChild(span);
    if (currenTime > 0) {
        span.textContent = (currenTime - 1) + 'sec!'
    } else {
        div.style.display = "none";
        span.style.display = "none";
        window.clearInterval(timer)
    }
    document.body.appendChild(div);
}

var timer = setInterval(bannerCount, 1000);