const http = require('http');

// const server = http.createServer(() => {
//     console.log('I am listening....')
// });

// server.listen(3000);

// const server = http.createServer((request, response) => {
//     // console.log(request);
//     response.setHeader('Content-Type', 'text/html');
//     //only one response, the server get just one response. If I put 2 end, just take the first.
//     // response.end('<h3>my first response</h3>');
//     // response.end('<p>my first response</p>');
//     response.end('<h3>my first response</h3><p>my first response</p>');
// })
// server.listen(3000);

// create a server with a json data
// const server = http.createServer((request, response) => {
//     const user = {
//         firstname: 'sam',
//         lastname: 'guetta'
//     }
//     response.setHeader('Content-Type', 'application/json')
//     response.end(JSON.stringify(user));
// })
// server.listen(3000);

// create a server with express module
const exp = require('express');
const app = exp();
// add module cors
const cors = require('cors');
app.use(cors());

// app.get('/', (req, res) => {
//     const user = {
//         firstname: 'sam',
//         lastname: 'guetta'
//     }
//     res.send(user);
//     // res.end('<h1>testetstjldhzld</h1>')
// })
// app.listen(3000);

// listen a get request
// app.get('/login', (req, res) => {
//     console.log(req.query);
//     const u = req.query.user;
//     const p = req.query.pass;
//     res.send(`Hello ${u}, your password is ${p}`);
// });
// listen with a fetch method (cf html)
app.get('/login', (req, res) => {
    console.log(req.query);
    // const u = req.query.user;
    // const p = req.query.pass;
    res.send(req.query);
});
// listen a post request
const bp = require('body-parser')
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.post('/login', (req, res) => {
    console.log(req.body);
    let user = {
        user: req.body.user,
        pass: req.body.pass
    }
    res.send(user)
})
app.listen(3000);


