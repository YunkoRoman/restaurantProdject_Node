const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class authService {
    
    authUser (email, password) {
        const UserModel = dataBase.getModel('users');
        
        try {
            if (!email && !password) throw new Error('Some field is empty');
            return UserModel.findOne({
                where: {
                    email,
                    password
                }
            })

        }catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'userService/authUser')
        }
    }
    userIsRegister(id, name, surname) {
        const UserModel = dataBase.getModel('users');

        try {
            // toDO service dont check it
            if (!id || !name || !surname) throw new Error('Some field is empty');
            return UserModel.findOne({
                where: {
                    id,
                    name,
                    surname
                }
            })

        }catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'userService/userIsRegister')
        }
    }

}


module.exports = new authService();