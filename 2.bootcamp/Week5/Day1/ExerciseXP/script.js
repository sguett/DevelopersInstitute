// Exercise 1
// Give to all paragraphs inside the article tag the class para_article

//method 1
// let paragraph = document.querySelectorAll("p");
// for (let i = 0; i < paragraph.length; i++) {
//     paragraph[i].classList.add("para_article");
// }

//method 2
// let paragraph1 = document.getElementsByTagName("p");
// for (p of paragraph1) {
//     p.setAttribute("class", "para_article");
// }

// Remove the last paragraph in the article.
// let article = document.getElementsByTagName("article")[0];
// article.removeChild(article.lastChild);

// Add an event listener so that when you click on the h2, it is removed from the DOM.
// let h2 = document.getElementsByTagName("h2")[0];
// h2.addEventListener("click", removeH2);

// function removeH2() {
//     h2.remove();
// }

// Set the font size of the h1 to be a random pixel size from 0 to 100.
// let h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = Math.floor(Math.random() * 101) + "px";
// h1.addEventListener("click", hideH1);

// function hideH1() {
//     h1.hidden = true;
// }

// Fade out the 2nd paragraph over 2000 milliseconds, when it’s clicked
// let secondParagraph = paragraph[1];
// secondParagraph.addEventListener("click", fadeOutSecondPara);

// function fadeOutSecondPara() {
//     secondParagraph.style.opacity = "0";
//     secondParagraph.style.transition = "all ease 2s";
// }

// Get the value in the inputs and append it to the end of the html, inside a table

// let table = document.createElement("table");
// let row = document.createElement("tr");
// let input = document.getElementsByTagName("input");

// function addTable(arg) {
//     if (arg == "val1") {
//         let cell1 = document.createElement("td");
//         cell1.innerHTML = input[0].value;
//         row.appendChild(cell1);
//     } else {
//         let cell2 = document.createElement("td");
//         cell2.innerHTML = input[1].value;
//         row.appendChild(cell2);
//     }
//     document.body.appendChild(table);
//     table.appendChild(row);
// }

// Exercise 2
// Create a function called : getBold_items() that takes no parameter. This function has to collect all the bold items inside the paragraph.

// function getBold_items() {
//     let getBold = document.getElementsByTagName("strong");
//     return getBold
// }

// Create a function called : highlight() that change the color of each bold item to blue. Create a function called : return_normal() that change the color of each bold item to black

// function highlight() {
//     for (let x of getBold_items()) {
//         x.style.color = "blue";
//     }
// }

// function return_normal() {
//     for (let x of getBold_items()) {
//         x.style.color = "black";
//     }
// }

// let lastParagraph = paragraph[4];
// lastParagraph.addEventListener("mouseover", highlight);
// lastParagraph.addEventListener("mouseout", return_normal);


// Exercise 3

let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let form = document.getElementById("MyForm");

form.addEventListener("submit", getVolume);

function getVolume(e) {
    volume.value = Math.round(((4 * Math.PI * Math.pow(parseFloat(radius.value), 3)) / 3) * 100) / 100;
    e.preventDefault();
}