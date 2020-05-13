// let div = document.createElement('div');
// let text = document.createTextNode('Here I am');

// div.appendChild(text);
// document.body.appendChild(div);


// ex1
let div = document.body.firstElementChild;
let div2 = document.body.children[0];

let ul1 = document.body.children[1];
let ul2 = document.body.firstElementChild.nextElementSibling;

let li1 = document.body.children[1].children[1];



// ex2
let div = document.getElementById("container")
div = document.getElementsByTagName("div")[0]

let ul = document.getElementsByTagName("ul")

for (x of ul) {
    for (y of x.children) {
        console.log(y)
    }
}

let children = document.querySelectorAll('ul > li');
for (let child of children) {
    console.log(child.innerHTML)
}

document.getElementsByClassName("list")[0].innerText + "\n" + document.getElementsByClassName("list")[1].innerText


// part 3 - ex 1

let input = document.getElementById("Id")
let href = input.href;
let href = input.hreflang;
let href = input.rel;
let href = input.target;
let href = input.type;

// part 3 - ex 2

let elem = document.getElementById("text");
elem.style.background = "red";
elem.style.fontSize = "14px";
elem.style.fontFamily = "Calibri";
elem.style.color = "pink";