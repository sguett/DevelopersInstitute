const exp = require('express');
const cors = require('cors');
const bp = require('body-parser');
const pws = require('p4ssw0rd');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'postgres2626',
        database: 'bootcamp'
    }
});

const app = exp();

app.use(exp.static(__dirname + '/public'));
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db('users')
        .select('username', 'password')
        .where({ username: username })
        .then(data => {
            if (data.length > 0) {
                const pass = data[0].password;
                if (pws.check(password, pass, 10)) {
                    db('login')
                        .insert({
                            username: username,
                            password: password
                        })
                        .returning('*')
                        .then(log => {
                            res.send({ message: `OK Hello your username is ${log[0].username}` })
                        })
                }
                else {
                    res.send({ message: 'NOT OK Username Or Password does not exist' })
                }
            } else {
                res.send({ message: 'NOT OK Username Or Password does not exist' })
            }
        })
        .catch(err => {
            res.send({ message: err })
        })
})
app.post('/register', (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    db('users')
        .select('email', 'username', 'password')
        .where({ email: email })
        .then(data => {
            if (data.length > 0) {
                res.send({ message: `Key (email)=${data[0].email} already exists.` })
            } else {
                db('users').insert({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    username: username,
                    password: pws.hash(password, 10),
                })
                    .returning('*')
                    .then(data => {
                        res.send({ message: `OK Hello ${data[0].first_name} ${data[0].last_name}. Your ID is ${data[0].user_id}` })
                    })
                    .catch(err => {
                        console.log(err);
                        res.send({ message: 'insert failed!!!' })
                    })
            }
        })
        .catch(err => {
            res.send({ message: err })
        })
})
app.listen(3000);
