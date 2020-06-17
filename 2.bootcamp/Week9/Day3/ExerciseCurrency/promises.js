const list = 'http://www.apilayer.net/api/list?access_key=075d15d60a95b06528ad8d5812e3d35e'
const curr = 'http://www.apilayer.net/api/live?access_key=075d15d60a95b06528ad8d5812e3d35e&format=1'

const root = document.getElementById('root');
const input = document.createElement('input')
const button = document.createElement('button')
button.innerText = 'Calculate'

const getExchangeRate = async (fromCurrency, toCurrency, money) => {
    const response = await fetch(curr);
    const rates = await response.json();
    const rate = rates.quotes;
    // console.log(fromCurrency, toCurrency)
    return (rate['USD' + toCurrency] / rate['USD' + fromCurrency]) * money;
}

const initList = async () => {
    const response = await fetch(list);
    const listing = await response.json();
    const AllList = listing.currencies;

    const select1 = document.createElement('select')
    const select2 = document.createElement('select')
    for (const i in AllList) {
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')

        option1.setAttribute("value", i)
        option1.innerText = AllList[i]

        option2.setAttribute("value", i)
        option2.innerText = AllList[i]

        select1.appendChild(option1)
        select2.appendChild(option2)
    }
    root.appendChild(select1)
    root.appendChild(select2)

}

initList()
    .then(res => {
        root.appendChild(input)
        root.appendChild(button)
    })


button.addEventListener('click', function () {
    if (root.children.length > 4) {
        root.lastElementChild.remove()
    }
    let val1 = document.getElementsByTagName("select")[0].value;
    let val2 = document.getElementsByTagName("select")[1].value;
    let valToConvert = document.getElementsByTagName("input")[0].value;

    getExchangeRate(val1, val2, valToConvert)
        .then(res => {
            // console.log(res);
            let text = document.createElement("div");
            text.innerText = val1 + " to " + val2 + "==>" + res
            root.appendChild(text);
        })
})


