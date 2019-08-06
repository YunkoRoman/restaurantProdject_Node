const dataBase = require('../../dataBase').getInstance();
const tokinayzer = require('../../helpers/tokinayzer').auth;
const ControllerError = require('../../errors/ControllerError');

//Реєстрація користувача

module.exports = async (req, res, next) => {
    try {
        const UserModel = dataBase.getModel('users');
        const {email, password} = req.body;

        if (!email || !password) throw new Error('Some field is empty');
        const UserIsRegistr = await UserModel.findOne({
            where:{
                email,
                password
            }
        });
        
        if (!UserIsRegistr) throw new Error('You are not register');

        const {id, name, surname} = UserIsRegistr;

        const token = tokinayzer({id, name, surname});

        res.json({
            success: true,
            msg:token
        })




    } catch (e) {
       next( new ControllerError(e.message, e.status, 'authUser'))
    }

};
