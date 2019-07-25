const express = require('express');
const path = require('path');
const cors = require('cors');
const dataBase = require('./dataBase').getInstance();
const app = express();
const registrationUser = require('./routes/registratonRoutes');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods","GET, HEAD, OPTIONS, POST, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dataBase.setModels();

app.use('/user', registrationUser);




app.listen(3000, err => {
    if (err) console.log(err);
    console.log('Server listen on port 3000');
});
