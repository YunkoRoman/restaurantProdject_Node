const express = require('express');
const path = require('path');
require('./dataBase').getInstance();

const cors = require('cors');
const dataBase = require('./dataBase').getInstance();
const app = express();

const RegistrationUser = require('./routes/registratonRoutes');
const AuthUser = require('./routes/auth');
const Restaurants = require('./routes/restaurantRoutes');
const Basket = require('./routes/basketRoutes');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods","GET, HEAD, OPTIONS, POST, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dataBase.setModels();
app.use('/user', RegistrationUser, AuthUser );
app.use('/restaurants', Restaurants );
app.use('', Basket);

app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err)
});

app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            success: false,
            message: err.message || 'Unknown Error',
            controller: err.controller
        })
});




app.listen(3000, err => {
    if (err) console.log(err);
    console.log('Server listen on port 3000');
});
