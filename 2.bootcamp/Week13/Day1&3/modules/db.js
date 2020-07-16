const pws = require('p4ssw0rd');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'postgres2626',
        database: 'hr1'
    }
});

const findUser = (username) => {
    return db('logins')
        .select('username', 'password')
        .where({ username: username })
}

const createUser = ({ username, password }) => {
    return db('logins').insert({
        username: username,
        password: pws.hash(password, 10)
    })
        .returning('*');

}

module.exports = {
    findUser,
    createUser
}