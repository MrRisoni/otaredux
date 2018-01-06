// the back-end for the OTA
const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4800;

const Sequelize = require('sequelize');
const cors = require('cors');

const dbname = process.env.DBNAME || 'otareduxdb';
const user = process.env.DBUSER || 'root';
const passwd = process.env.DBPASSWD || '';
const host = process.env.DBHOST || '127.0.0.1';
console.log(dbname, user, passwd, host);
const sequelize = new Sequelize(dbname, user, passwd, {
    host: host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const CountryModel = sequelize.define('ota_countries', {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            field: 'con_id',
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.CHAR,
            field: 'con_name'
        },
        code: {
            type: Sequelize.CHAR,
            field: 'con_code'
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

app.use(bodyParser.json());
app.use(cors());




app.get('/api/countries', (req, res) => {
    CountryModel.findAll(
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