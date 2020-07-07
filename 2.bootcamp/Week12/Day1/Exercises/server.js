const exp = require('express');
const cors = require('cors');
const fetchUsers = require('./fetchUsers')

const app = exp();

app.use(cors());

app.use(exp.static(__dirname + '/public'));

app.get('/user', (req, res) => {
    fetchUsers.getUsers(req.query.id)
        .then(filterData => {
            res.send(filterData);
        })
        .catch(err => {
            res.status(404).send({ err: 'Data not found' })
        })
});

app.listen(3001);