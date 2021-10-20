'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const eventRoutes = require('./routes/eventRoutes');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { required } = require('@hapi/joi');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true},
    () => console.log('connected to db')
);


app.use(express.json());

/* app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://13.229.200.21:3000",
        "http://54.255.140.172:3000",
        "https://oka1-app.herokuapp.com",
        "http://52.77.208.216:3000"
    ],
})); */

//app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

/* app.use(function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
}) */

app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);




const sql = require('mssql')
app.listen(process.env.port || config.port, () => console.log('is on http://localhost:' + config.port));