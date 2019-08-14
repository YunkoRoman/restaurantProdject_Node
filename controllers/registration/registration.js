const sendEmail = require('../../helpers/SendEmailforRegistration');
const ControllerError = require('../../errors/ControllerError');
const {registrationService} = require('../../services');


//Реєстрація користувача

module.exports = async (req, res, next) => {
    try {
        const userObj = req.body;
        const {email} = userObj;
        if (!userObj) throw new Error('Some field is empty');
        const findEmail = await registrationService.findEmail(email);
        if (findEmail) throw new Error('Такий Email вже існує');
        const createNewUser = await registrationService.registrUser(userObj);
        const info = await sendEmail(createNewUser.id, email);

        res.json({
            success: true,
            msg: createNewUser,
            msg2: info
        })


    } catch (e) {
        next(new ControllerError(e.message, e.status, 'authUser'))
    }
};