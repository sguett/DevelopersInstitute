let color = null;
let mousedown = false;
let body = document.getElementsByTagName("body")[0];
let rightPart = document.getElementsByClassName("rightPart");
for (let i = 0; i < 936; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "miniBlocks")
    div.style.border = "1px lightgray solid";
    div.style.backgroundColor = "white";
    rightPart[0].appendChild(div);
}

let clearButton = document.getElementsByClassName("clear")[0];
let miniBlocks = document.querySelectorAll(".miniBlocks");
clearButton.addEventListener("click", function() {
    let miniBlocks = document.querySelectorAll(".miniBlocks");
    for (miniBlocks of miniBlocks) {
        // console.log(miniBlocks2.style.backgroundColor)
        miniBlocks.style.backgroundColor = "white";
    }
});



body.addEventListener("mousedown", function() {
    mousedown = true;
})

body.addEventListener("mouseup", function() {
    mousedown = false;
})

let colorBlocks = document.querySelectorAll(".leftPart > *")
for (colorBlocks of colorBlocks) {
    colorBlocks.addEventListener("click", function(event) {
        color = event.target.style.backgroundColor;
    });
}


for (miniBlocks of miniBlocks) {
    miniBlocks.addEventListener("mousedown", function(event) {
        if (color != null) {
            event.target.style.backgroundColor = color;
        }
    });
    miniBlocks.addEventListener("mouseover", function(event) {
        if (mousedown && color != null) {
            event.target.style.backgroundColor = color;
        }
    });
}