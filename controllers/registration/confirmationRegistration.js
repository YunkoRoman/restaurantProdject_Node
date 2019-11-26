const dataBase = require('../../dataBase').getInstance();
const {tokenVerifikator} = require('../../helpers');
const ControllerError = require('../../errors/ControllerError');

//checking email
//З фронта приходить токен, ми його розшифровуємо та змінюємо checked на true
// With Front walk valid token, we decode it and change checked to true

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('users');
        const {token} = req.body;
        const {user:id} = tokenVerifikator(token);

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