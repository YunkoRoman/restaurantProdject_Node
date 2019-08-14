const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerifikator').registration;
const ControllerError = require('../../errors/ControllerError');

//Підтвердження пошти.
//З фронта приходить токен, ми його розшифровуємо та змінюємо checked на true

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('users');
        const {token} = req.body;
        const {user:id} = tokenVerificator(token);
        if (!token) throw new Error('No token');
        if (!id) throw new Error('User not valid');

         await UserModel.update({
               checked: true
           }, {
               where:{
                   id
               }
           });

        res.json({
            success: true,
            msg: 'User checked'
        })

    } catch (e) {
        next( new ControllerError(e.message, e.status, 'authUser'))
    }

};