const Joi = require('joi');
const {strongPass} = require('../constants/regExp');

module.exports = Joi.object().keys({
    name: Joi.string().alphanum().min(2).max(40).required(),
    surname: Joi.string().alphanum().min(2).max(40).required(),
    password: Joi.string().min(8).max(50).regex(strongPass).required(),
    email: Joi.string().email().required(),
});