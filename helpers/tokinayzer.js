const jwt = require('jsonwebtoken');
const secret = require('../constants/secret').secret;
const AuthSecret = require('../constants/secret').AuthSecret;

module.exports = {
    auth: token => {
        return jwt.sign(token, AuthSecret, {expiresIn: '30d'})
    },

    register: data => {
        return jwt.sign(data, secret, {expiresIn: '30d'})
    }

}

