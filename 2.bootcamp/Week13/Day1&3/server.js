const exp = require('express');
const cors = require('cors');
// const fs = require('fs');
const bp = require('body-parser');
const pws = require('p4ssw0rd');
// const knex = require('knex');
const DB = require('./modules/db');

// const db = knex({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         port: '5432',
//         user: 'postgres',
//         password: 'postgres2626',
//         database: 'hr1'
//     }
// });

const app = exp();

app.use(exp.static(__dirname + '/public'));
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    DB.findUser(username)
        .then(user => {
            if (user.length === 0) {
                DB.createUser(req.body)
                    .then(data => {
                        res.send({ message: `Welcome ${data[0].username} your id is ${data[0].id}` })
                    })
                    .catch(err => {
                        res.send({ message: 'failed to find user' });
                    })
            }
            else if (pws.check(password, user[0].password, 10)) {
                res.send({ message: 'logged in' })
            }
            else {
                res.send({ message: 'incorrect password' })
            }
        })
})

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     db('logins')
//         .select('username', 'password')
//         .where({ username: username })
//         .then(data => {
//             if (data.length > 0) {
//                 const pass = data[0].password;
//                 if (pws.check(password, pass, 10)) {
//                     res.send({ message: 'You logged in' })
//                 }
//                 else {
//                     res.send({ message: 'Try again' })
//                 }
//             } else {
//                 db('logins').insert({
//                     username: username,
//                     password: pws.hash(password, 10)
//                 })
//                     .returning('*')
//                     .then(data => {
//                         res.send({ message: `Welcome ${data[0].username} your id is ${data[0].id}` })
//                     })
//                     .catch(err => {
//                         res.send({ message: 'insert failed!!!' })
//                     })
//             }
//             // console.log(data);
//             // res.send({ message: 'ok' })
//         })
//         .catch(err => {
//             res.send({ message: err })
//         })
//     // res.send({ message: 'ok' })

// })
app.listen(3000);
