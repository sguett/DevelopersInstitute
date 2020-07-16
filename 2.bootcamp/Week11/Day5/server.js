const http = require('http');

// const server = http.createServer(() => {
//     console.log('I am listening....')
// });

// server.listen(3000);

// create a server and send a html response
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

// get html file in public folder
app.use(exp.static(__dirname + '/public'));

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
app.get('/login/:id', (req, res) => {
    // console.log(req.query);
    console.log(req.params.id);

    // const u = req.query.user;
    // const p = req.query.pass;
    // if you want to send a message by status of result
    res.status(200).send('OK')
    // res.send(req.query);
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
// app.listen(3000);

// other way
// app.route('/login')
//     .get((req, res) => {
//         console.log(req.body);
//         res.send(req.body)
//     })
//     .post((req, res) => {
//         console.log(req.body);
//         let user = {
//             user: req.body.user,
//             pass: req.body.pass
//         }
//         res.send(user)
//     });

app.delete('/user', (req, res) => {

});
app.put('/register', (req, res) => {

});

// other way to set a port
app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log('APP is listening on port ' + app.get('port'));
})
// app.listen(3000);
