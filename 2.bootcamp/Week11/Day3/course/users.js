const axios = require('axios');

const getUsers = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await res.data;
        return users;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    usrs: getUsers
}