// Exercise 1
function myMove() {
    let anim = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(function() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            anim.style.left = pos + "px";
        }
    }, 5);
}

// Exercise 2

function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
}

//add dashes
function allowEnter(event) {
    event.target.classList.add('over');
}

//remove dashes
function allowLeave(event) {
    event.target.classList.remove('over');
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}


function dragDrop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let box = document.getElementById(data)
    event.target.appendChild(box);
}