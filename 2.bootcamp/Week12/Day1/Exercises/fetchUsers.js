const axios = require('axios');

const users = async (inputname = '') => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const returnUsers = await response.data;
        const filterData = returnUsers.filter(user => {
            let userNameToLower = user.name.toLowerCase();
            let nameToLower = inputname.toLowerCase();
            return userNameToLower.includes(nameToLower);
        })
        return filterData;
    }
    catch (err) {
        console.log(errs);
    }
};

module.exports = {
    getUsers: users
}