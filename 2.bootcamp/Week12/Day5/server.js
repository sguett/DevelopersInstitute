const exp = require('express');
const cors = require('cors');
const fs = require('fs');
const bp = require('body-parser');

const app = exp();

app.use(exp.static(__dirname + '/public'));
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

app.post('/shopping', (req, res) => {
    console.log(req.body);
    let shopping = [];
    try {
        const file_users = fs.readFileSync('./shoppingList');
        shopping = JSON.parse(file_users.toString());
    }
    catch (err) {
        console.log(err);
    }

    shopping.push(req.body);
    fs.writeFile('./shoppingList', JSON.stringify(shopping), err => {
        if (err) {
            console.log(err);
        }
    });

    res.send(shopping);
});

app.listen(3000);