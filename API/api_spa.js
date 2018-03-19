const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4800;

const Sequelize = require('sequelize');
const cors = require('cors');

const models = require('./models');

app.use(bodyParser.json());
app.use(cors());

app.get('/api/countries', (req, res) => {
    models.CountryModel.findAll(
        { order: [
                ['name', 'ASC']
            ]
        }).then(result => {
        res.send(result);
    });

});

app.get('/api/insurance', (req, res) => {
    res.send(require('./serverData/insurance'));
});

app.get('/api/bags', (req, res) => {
    res.send(require('./serverData/bags'));
});


app.get('/api/airports', (req,res) => {
    const data = require('./serverData/airports');
    res.send(data);
});



app.post('/api/pay', (req, res) => {
    // echo PNR tickets

    setTimeout( () => {
        res.send({success:1});
    },1000);

});


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});