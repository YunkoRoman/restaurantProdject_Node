const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class CheckUser {

    findRegisterUser(id, name, surname) {
        const UserModel = dataBase.getModel('users');

        try {

            if (!id || !name || !surname) throw new Error('Some field is empty');

            return UserModel.findOne({
                where: {
                    id,
                    name,
                    surname
                }
            })

        }catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'checkUser.service/findRegisterUser')
        }
    }
    findEmail(email) {
        const UserModel = dataBase.getModel('users');
        try {
            return UserModel.findOne({
                where: {
                    email
                }
            })

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'registrationService/findEmail')
        }
    }
}
module.exports = new CheckUser();