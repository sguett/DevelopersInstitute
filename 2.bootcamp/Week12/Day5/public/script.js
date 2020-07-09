const submit = () => {
    let item = document.getElementById('name').value;
    let quantity = document.getElementById('number').value;
    const shopping = {
        item,
        quantity
    }
    fetchData(shopping);
}

const fetchData = (data) => {
    fetch('http://localhost:3000/shopping', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => displayShopping(data))
}

const displayShopping = (list) => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    list.forEach(element => {
        let el = document.createElement('h3');
        el.innerHTML = element.item + ': ' + element.quantity;
        root.appendChild(el);
    });
}