const list = 'http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e'
const curr = 'http://www.apilayer.net/api/live?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1'

const root = document.getElementById('root');
const input = document.createElement('input')
const button = document.createElement('button')
button.innerText = 'Convert'

// function to get exchange rate
const getExchangeRate = async (fromCurrency, toCurrency, money) => {
    try {
        const response = await fetch(curr);
        const rates = await response.json();
        const rate = rates.quotes;
        // result converted round 2 digits
        const result = Math.round(((rate['USD' + toCurrency] / rate['USD' + fromCurrency]) * money) * 100) / 100
        return result;
    } catch (err) {
        console.log(err);
    }
}

// display list on select
const initList = async (nbBox) => {
    const response = await fetch(list);
    const listing = await response.json();
    const AllList = listing.currencies;
    createSelectBox(2, AllList); // call function to create select box
}

// create select box (here 2, but we can create more)
const createSelectBox = (nbBox, List) => {
    for (i = 0; i < nbBox; i++) {
        const select = document.createElement('select')
        // select.style.borderRadius = "10%";
        const text = document.createElement("h3")
        text.innerText = "To:"
        for (const el in List) {
            let option = document.createElement('option')
            option.setAttribute("value", el)
            option.innerText = List[el]
            select.appendChild(option)
        }
        root.appendChild(text)
        root.appendChild(select)
    }
    root.children[2].remove()
}

// call initList and create result
initList()
    .then(res => {
        const text = document.createElement("h3")
        text.innerText = "Amount:"
        root.appendChild(text)
        root.appendChild(input)
        root.appendChild(button)
    })

// on click, display result
button.addEventListener('click', async function () {
    if (root.children.length > 8) {
        root.lastElementChild.remove()
    }
    let val1 = document.getElementsByTagName("select")[0];
    let val2 = document.getElementsByTagName("select")[1];
    let valToConvert = document.getElementsByTagName("input")[0].value;
    try {
        await getExchangeRate(val1.value, val2.value, valToConvert)
            .then(res => {
                // console.log(res);
                let text = document.createElement("div");
                // text.innerText = val1.selectedOptions[0].innerText + " to " + val2.selectedOptions[0].innerText + "==>" + res
                text.innerText = res + " " + val2.value
                text.setAttribute("style", "background-color: white; color: black; width: 100px; margin-top: 20px; margin-left: 150px")
                root.appendChild(text);
            })
    } catch (err) {
        console.log(err);
    }
})


