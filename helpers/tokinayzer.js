const jwt = require('jsonwebtoken');

const {AuthSecret, secret} = require('../constants/secret');

module.exports = {
    auth: token => {
        return jwt.sign(token, AuthSecret, {expiresIn: '30d'})
    },

    register: data => {
        return jwt.sign(data, secret, {expiresIn: '30d'})
    }

}

