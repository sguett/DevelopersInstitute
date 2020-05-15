// Exercise 1

let elem = document.getElementsByTagName('div')[0];
elem.setAttribute("style", "background-color:lightblue;padding:5px;");

let firstName = document.getElementsByTagName('li')[0];
firstName.setAttribute("style", "display: none");

let secondName = document.getElementsByTagName('li')[1];
secondName.setAttribute("style", "border: 2px solid black");

document.body.style.fontSize = "24px";

if (elem.style.backgroundColor == "lightblue") {
    alert('Hello x and y');
}