// Exercise 1

let inputField = document.createElement("input");
inputField.setAttribute("placeholder", "Type what you need to buy")
document.body.appendChild(inputField);

let add = document.createElement("button");
add.setAttribute("name", "add");
add.textContent = "add"
document.body.appendChild(add);

let clearAll = document.createElement("button");
clearAll.setAttribute("name", "clear");
clearAll.textContent = "clear all"
document.body.appendChild(clearAll);

let nbItems = document.createElement("button");
nbItems.setAttribute("name", "items");
nbItems.textContent = "Number of items"
document.body.appendChild(nbItems);

let ul = document.createElement("ul");
document.body.appendChild(ul);

add.addEventListener("click", function() {
    if (inputField.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField.value));
        ul.appendChild(li);
        inputField.value = "";
    }
})

inputField.addEventListener("keypress", function(e) {
    if (inputField.value.length > 0 && e.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField.value));
        ul.appendChild(li);
        inputField.value = "";
    }
})

clearAll.addEventListener("click", function() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
})

nbItems.addEventListener("click", function() {
    let count = 0;
    for (x of ul.childNodes) {
        count++;
    }
    if (ul.nextElementSibling !== null) {
        ul.nextElementSibling.remove();
    }
    let div = document.createElement("div");
    div.textContent = "nb of items: " + count;
    document.body.appendChild(div);
})


// Exercise 2

let optionValue = document.getElementById("genres");
let selectValue = optionValue.options[optionValue.selectedIndex];
console.log(selectValue.value, selectValue.text);
let div = document.createElement("div");
div.textContent = "Value: " + selectValue.value + " ,Text: " + selectValue.text;
document.body.appendChild(div);
let option = document.createElement("option");
option.textContent = "Classic";
option.setAttribute("value", "classic");
option.selected = "selected";
optionValue.appendChild(option);


// Exercise 3

function removecolor() {
    let colorSelect = document.getElementById("colorSelect");
    for (i = 0; i < colorSelect.length; i++) {
        if (colorSelect[i].text == colorSelect.value) {
            colorSelect[i].remove();
        }
    }
}