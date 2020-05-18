let inputMail = document.createElement("input");
let calc = document.getElementById("calculator");
let button = document.createElement("button");
inputMail.setAttribute("type", "email");
inputMail.setAttribute("placeholder", "your email");
button.setAttribute("onclick", "checkMail()");
button.textContent = "Validate";
calc.parentElement.appendChild(inputMail);
calc.parentElement.appendChild(button);


function calculateTip() {
    let billAmt = parseFloat(document.getElementById("billamt").value);
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = parseFloat(document.getElementById("peopleamt").value);
    let totalTip = document.getElementById("totalTip");
    let tip = document.getElementById("tip");
    // tip.style.display = "initial";
    if (serviceQual == 0 || isNaN(billAmt)) {
        return alert("enter the values!")
    } else if (isNaN(numOfPeople) || numOfPeople < 1) {
        numOfPeople = 1;
        tip.style.display = "none";
    }
    let total = (billAmt * serviceQual) / numOfPeople;
    total.toFixed(2);
    totalTip.style.display = "block";
    tip.textContent = total;

}

function checkMail() {
    // let valid = true;
    let atSymbol = inputMail.value.indexOf("@");
    let dot = inputMail.value.indexOf(".");
    if (atSymbol < 1) {
        inputMail.style.border = "1px solid red"
        return false;
    }
    if (dot <= atSymbol + 2) {
        inputMail.style.border = "1px solid red"
        return false;
    }
    if (dot === inputMail.value.length - 1) {
        inputMail.style.border = "1px solid red"
        return false;
    }

    inputMail.style.border = "1px solid green"
    return true;
}