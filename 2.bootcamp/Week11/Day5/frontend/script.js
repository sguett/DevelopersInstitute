
const getDataFromServer = () => {
    fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(data => showData(data))
        .catch(err => console.log(err))
}

const showData = (data) => {
    const root = document.getElementById("root")
    const name = document.createElement('h1')
    const lastname = document.createElement('h1')
    name.innerText = data.firstname;
    lastname.innerText = data.lastname;

    root.appendChild(name);
    root.appendChild(lastname);
}

// fetch with a get method
// const fetchData = () => {
//     const u = document.getElementById('u').value;
//     const p = document.getElementById('p').value;
//     fetch(`http://localhost:3000/login?username=${u}&password=${p}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }

// fetch with a post method
const fetchData = () => {
    const u = document.getElementById('u').value;
    const p = document.getElementById('p').value;
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ user: u, pass: p })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}