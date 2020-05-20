// Exercise 1
function allowDrop(event) {
    event.preventDefault();
}

function allowEnter(event) {
    event.target.classList.add('over');
}

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

// Exercise 2

let element = document.querySelectorAll("#letter")
element.forEach(item => {

    item.setAttribute('draggable', 'true');

    item.addEventListener("dragstart", function(event) {
        event.target.style.backgroundColor = "lightpink";
    });

    item.addEventListener("dragend", function(event) {
        event.target.style.backgroundColor = "lightgreen";
        let _x = event.clientX;
        let _y = event.clientY;
        event.target.style.left = _x + "px";
        event.target.style.top = _y + "px";
        event.target.style.position = "absolute"; //Necessary
    });
})