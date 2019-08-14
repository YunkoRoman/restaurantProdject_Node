const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class authService {
    
    authUser(userObj) {
        const UserModel = dataBase.getModel('users');
        
        try {
            return UserModel.findOne(userObj)

        }catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'userService/authUser')
        }
    }
}


module.exports = new authService();