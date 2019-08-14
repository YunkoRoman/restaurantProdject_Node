const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class registrationService {

    registrUser(userObj) {
        const UserModel = dataBase.getModel('users');
        const {name, surname, email, password} = userObj;
        try {
            return UserModel.create({
                name,
                surname,
                email,
                password,
                checked: false
            })

        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'userService/registrationUser')
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
            throw new ControllerError(e.parent.sqlMessage, 500, 'userService/registrationUser')
        }
    }
}


module.exports = new registrationService();