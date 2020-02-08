const dataBase = require('../../dataBase').getInstance();
const {tokenVerifikator} = require('../../helpers');
const ControllerError = require('../../errors/ControllerError');

//checking email
//  we have request with valid token, we decode it and change checked to true

module.exports = async (req, res, next) => {
    try {
        const UserModel = dataBase.getModel('users');
        const {token} = req.body;
        console.log(token);
        const {user:id} = tokenVerifikator.registration(token);
        console.log(id);

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
        next( new ControllerError(e.message, e.status, 'confirmationRegistration'))
    }

};