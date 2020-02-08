const Joi = require('joi');

const {SendEmailforRegistration:sendEmail} = require('../../helpers');
const ControllerError = require('../../errors/ControllerError');
const {registrationService, checkUser} = require('../../services');
const {userValidator} = require('../../validators');


//Registration user

module.exports = async (req, res, next) => {
    try {
        const userObj = req.body;
        if (!userObj) throw new Error('Some field is empty');

        const {email} = userObj;
        // const isUserValid = Joi.validate(userObj, userValidator);
        //
        // if (isUserValid.error) {
        //     throw new ControllerError(isUserValid.error.details[0].message, 400, 'registration/registrationUser')
        // }

        const findEmail = await checkUser.findEmail(email);

        if (findEmail) throw new Error('This email already is register');

        const createNewUser = await registrationService.registrUser(userObj);
        const info = await sendEmail(createNewUser.id, email);

        res.json({
            success: true,
            msg: createNewUser,
            msg2: info
        })


    } catch (e) {
        next(new ControllerError(e.message, e.status, 'registration/registrationUser'))
    }
};