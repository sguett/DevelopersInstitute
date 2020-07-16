const exp = require('express');
const cors = require('cors');
const fs = require('fs');
const bp = require('body-parser');
const pws = require('p4ssw0rd');


const app = exp();

app.use(exp.static(__dirname + '/public'));
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

app.post('/reg', (req, res) => {
    console.log(req.body);
    let users = [];
    try {
        const file_users = fs.readFileSync('./users');
        users = JSON.parse(file_users.toString());
    }
    catch (err) {
        console.log(err);
    }

    const filterData = users.filter(user => {
        return user.username == req.body.username;
    });
    if (filterData.length >= 1) {
        res.send({ message: 'not ok username already exist!!!' })
    } else {

        req.body.password = pws.hash(req.body.password, 10)

        users.push(req.body);
        fs.writeFile('./users', JSON.stringify(users), err => {
            if (err) {
                console.log(err);
            }
        });

        res.send({ message: 'OK' });
    }
});

app.listen(3000);