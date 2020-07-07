const search = () => {
    let name = document.getElementById('id').value;
    fetch('http://localhost:3001/user/?id=' + name)
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(err => {
            console.log(err);
        })
}

const displayData = (data) => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    for (i in data) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src', `http://robohash.org/${i}?size=200x200`);

        let title = document.createElement('h4');
        title.innerHTML = data[i].name;

        let username = document.createElement('p');
        username.innerHTML = data[i].username;

        let email = document.createElement('h6');
        email.innerHTML = data[i].email;

        div.classList.add('card');
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(username);
        div.appendChild(email);

        root.appendChild(div);
    }
}