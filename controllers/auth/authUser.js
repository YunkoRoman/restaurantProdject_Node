const dataBase = require('../../dataBase').getInstance();
const tokinayzer = require('../../helpers/tokinayzer');

//Реєстрація користувача

module.exports = async (req, res) => {
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

        let token = tokinayzer({id, name, surname});

        res.json({
            success: true,
            msg:token
        })




    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }

};
