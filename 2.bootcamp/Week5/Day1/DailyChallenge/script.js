var x = document.getElementById("dailychal1");

x.addEventListener("mouseover", ChangeColor);
x.addEventListener("mouseout", ChangeSize);
x.addEventListener("click", ChangeBackColor);
x.addEventListener("dblclick", ChangePosition);

function ChangeColor() {
    x.style.color = "red";
}

function ChangeSize() {
    x.style.fontSize = "large";
}

function ChangeBackColor() {
    x.style.backgroundColor = "yellow";
}

function ChangePosition() {
    x.style.margin = "20px 20px"
}