const tokenVerifikator = require('../../helpers/tokenVerifikator');
const ControllerError = require('../../errors/ControllerError');
const {authService, basketService} = require('../../services/index');

//Витягування з бази всі продукти які лежать в корзині по даному юзеру

module.exports = async (req, res, next) => {
    try {

        // const token = req.get('Authorization');
        // console.log(token);
        // if (!token) throw new Error('No token');
        //
        // const {id, name, surname} = tokenVerifikator.auth(token);
        // const UserIsRegistr = await authService.userIsRegister(id, name, surname);
        // if (!UserIsRegistr) throw new Error('You are not register');
        console.log(req.body);

        const products = await basketService.uploadProduct(req.body);
        console.log(products);

        res.json({
            success: true,
            msg: products
        })
    } catch (e) {
        next( new ControllerError(e.message, e.status, 'basket'))
    }

};