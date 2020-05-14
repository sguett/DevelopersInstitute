let num1 = null;
let num2 = null;
let operator = "";
let OpeClic = false;
let ops = ["+", "-", "/", "X"];

function my_f(arg) {
    var showCalcBox = document.getElementById("display");

    // clear showCalcBox
    if (arg == "clear") {
        showCalcBox.innerHTML = showCalcBox.innerHTML.substring(0, showCalcBox.innerHTML.length - 1);
        if (num2 == null) {
            num1 = showCalcBox.innerHTML
        } else if (num2 !== null) {
            num2 = showCalcBox.innerHTML
        }
    }
    // reset showCalcBox
    if (arg == "reset") {
        showCalcBox.innerHTML = "";
        num1 = null;
        num2 = null;
        operator = "";
        OpeClic = false;
    }
    if (typeof(arg) == "number") {
        if (showCalcBox.innerHTML == "0") {
            if (OpeClic == false) {
                showCalcBox.innerHTML = arg;
                num1 = showCalcBox.innerHTML;
            } else if (OpeClic == true && num2 == null) {
                showCalcBox.innerHTML = arg;
                num2 = showCalcBox.innerHTML;
            } else if (OpeClic == true && num2 !== null) {
                showCalcBox.innerHTML = showCalcBox.innerHTML + arg;
                num2 = showCalcBox.innerHTML;
            }
        } else {
            if (OpeClic == false) {
                showCalcBox.innerHTML = showCalcBox.innerHTML + arg;
                num1 = showCalcBox.innerHTML;
            } else if (OpeClic == true && num2 == null) {
                showCalcBox.innerHTML = arg;
                num2 = showCalcBox.innerHTML;
            } else if (OpeClic == true && num2 !== null) {
                showCalcBox.innerHTML = showCalcBox.innerHTML + arg;
                num2 = showCalcBox.innerHTML;
            }
        }
    } else if (arg == ".") {
        if (showCalcBox.innerHTML.toString().indexOf(".") == -1) {
            if (OpeClic == false) {
                showCalcBox.innerHTML = showCalcBox.innerHTML + arg;
                num1 = showCalcBox.innerHTML;
            } else if (OpeClic == true && num2 == null) {
                showCalcBox.innerHTML = arg;
                num2 = showCalcBox.innerHTML;
            } else if (OpeClic == true && num2 !== null) {
                showCalcBox.innerHTML = showCalcBox.innerHTML + arg;
                num2 = showCalcBox.innerHTML;
            }
        }
    } else {
        for (let i = 0; i < ops.length; i++) {
            if (ops[i] == arg) {
                if (OpeClic == false) {
                    operator = arg;
                    OpeClic = true;
                } else {
                    num1 = calc(operator, parseFloat(num1), parseFloat(num2));
                    num2 = null;
                    operator = arg;
                    OpeClic = true;
                }
            }
        }
    }
    if (arg == "=") {
        showCalcBox.innerHTML = calc(operator, parseFloat(num1), parseFloat(num2));
        num1 = showCalcBox.innerHTML;
        num2 = null;
        OpeClic = false;
    }
}


// create a calc function to do the operations
function calc(op, n1, n2) {
    var result = 0;
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case 'X':
            result = n1 * n2;
            break;
        case '/':
            if (n2 > 0) {
                result = n1 / n2;
                break;
            }
    }
    return result;
}