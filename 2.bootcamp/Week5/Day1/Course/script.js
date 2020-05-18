// Exercise 1

// function insert_Row() {
//     let table = document.getElementById("sampleTable");
//     let NewRow = table.insertRow(-1);
//     var cell1 = NewRow.insertCell(0);
//     var cell2 = NewRow.insertCell(1);
//     cell1.innerHTML = "Row3 cell1";
//     cell2.innerHTML = "Row3 cell2";
// }

// function insert_Row() {
//     // let table = document.getElementById("sampleTable");
//     let NewRow = document.createElement("tr");
//     let newCell;
//     for (let i = 0; i < 2; i++) {
//         newCell = document.createElement("td");
//         newCell.appendChild(document.createTextNode(`Row${document.getElementById("sampleTable").rows.length+1} cell${i+1}`));
//         NewRow.appendChild(newCell);
//     }
//     document.getElementById("sampleTable").appendChild(NewRow);
// }

//////

let result = document.getElementById("result")
let form = document.forms[0]
form.addEventListener("submit", formClicked);

function formClicked(e) {
    //get the selected value
    let selectForm = e.target.elements[0]
    let selectFormValue = selectForm.value
    console.log(selectFormValue)

    //get the input value
    let inputForm = selectForm.nextElementSibling
    let inputValue = inputForm.value
    console.log(inputValue)
        //get the checked value
    let checkedOption;
    for (x of e.target.elements) {
        if (x.name == "age" && x.checked) {
            checkedOption = x.previousElementSibling.innerHTML
            console.log(checkedOption)
        }
    }
    result.innerHTML = ` Your favorite fruit is ${selectFormValue}, your favorite hobby
                        is ${inputValue} and you are ${checkedOption} years old`
    e.preventDefault()
}