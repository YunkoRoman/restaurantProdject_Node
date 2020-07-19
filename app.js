const express = require('express');
const path = require('path');
const cors = require('cors');

const passport = require("passport");

const dataBase = require('./dataBase').getInstance();

const app = express();
const {AuthUser, Restaurants, Order, RegistrationUser, Payment, User} = require('./routes');

dataBase.setModels();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());


app.use('/register', RegistrationUser,);
app.use('/auth', AuthUser);
app.use('/restaurants', Restaurants);
app.use('/purchase', Payment);
app.use('/order', Order);
app.use('/user', User);

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
    if (err) console.error(err);
    console.log('Server listen on port 3000');
});