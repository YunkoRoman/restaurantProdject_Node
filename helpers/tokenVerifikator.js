const jwt = require('jsonwebtoken');
let secret = require('../constants/secret').secret;
let AuthSecret = require('../constants/secret').AuthSecret;

module.exports = {
    auth: token => {

        if (!token) throw new Error('No token');
        let user = null;

        jwt.verify(token, AuthSecret, (err, decode) => {
            if (err) throw new Error('Not valid token');
            user = decode;
        });

        return user;
    },

    registration: token => {

        if (!token) throw new Error('No token');
        let user = null;

        jwt.verify(token, secret, (err, decode) => {
            if (err) throw new Error('Not valid token');
            user = decode;
        });

        return user;
    }
};