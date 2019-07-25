const jwt = require('jsonwebtoken');
const {secret} = require('../constants/secret');

module.exports = (data) =>{return jwt.sign(data,secret,{expiresIn: '30d'})};

