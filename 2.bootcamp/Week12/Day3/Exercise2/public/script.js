const register = () => {
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    const user = {
        username,
        password
    }
    fetch('http://localhost:3000/reg', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}