const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class registrationService {

    registrUser(userObj) {
        console.log(userObj);
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
            throw new ControllerError(e.parent.sqlMessage, 500, 'registrationService/registrationUser')
        }
    }


}


module.exports = new registrationService();