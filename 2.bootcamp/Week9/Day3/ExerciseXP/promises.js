// #1) Convert the below promise into async await
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(date => console.log(data))

const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        return data
    } catch (err) {
        throw new Error('can not fetch')
    }
}

getUsers()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
