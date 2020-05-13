// Exercise 1

document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

let newLi = document.createElement("li");
document.querySelector("ul").appendChild(newLi);
let newText = document.createTextNode("Logout");
newLi.appendChild(newText);

// Exercise 2
// Change the name “Pete” by “Richard”
document.querySelectorAll("li")[1].innerText = "Richard";

// Change each first name of the <ul> by your name
//method1
let children = document.querySelectorAll('ul > li');
for (let child of children) {
    if (child.innerText == "John" || child.innerText == "David") {
        child.innerText = "Samuel"
    }
}
//method2
let children = document.querySelectorAll('ul');
for (i = 0; i < children.length; i++) {
    children[i].firstElementChild.innerText = "Samuel"
}

// Add add the end of each <ul>, a paragraph that says “Hey students”

let children2 = document.querySelectorAll('ul');
for (i = 0; i < children.length; i++) {
    var newLi2 = document.createElement('li');
    children2[i].appendChild(newLi2);
    var newText2 = document.createTextNode('Hey Students');
    newLi2.appendChild(newText2);
}

// Delete the <li> Sarah

document.querySelectorAll('ul')[1].children[1].remove("Sarah");

// Change the class of <ul> by “student_list”

for (i = 0; i < 2; i++) {
    document.getElementsByClassName("list")[0].className = "student_list";
}

// Add a class “university” to the first <ul>

// if we don't run the previous query, change student_list by list
document.getElementsByClassName("student_list")[0].className += " university";


// Exercise 3

let logo = document.getElementsByClassName("fb_logo")
logo[0].style.backgroundColor = "red"
logo[0].style.background = "url('https://cdn.1min30.com/wp-content/uploads/2017/07/Symbole-Instagram.jpg')"
let button = document.getElementsByClassName("login_form_login_button")
button[0].children[0].value = "Intagrammmmmm!"