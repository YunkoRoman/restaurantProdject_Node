const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerifikator').registration;

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('users');
        const {token} = req.body;
        console.log(token);
        const {user:id} = tokenVerificator(token);
        console.log(id);
        if (!token) throw new Error('No token');
        if (!id) throw new Error('User not valid');

         const checkedUser = await UserModel.update({
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
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }

};