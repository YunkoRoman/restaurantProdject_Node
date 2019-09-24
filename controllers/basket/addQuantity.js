const ControllerError = require('../../errors/ControllerError');
const {basketService} = require('../../services/index');

//Додавання клькості продуктів в корзині

module.exports = async (req, res, next) => {
    try {
        const {id, quantity, price} = req.body;
        const Add = await basketService.addQuantity(id, quantity, price);
        res.json({
            success: true,
            msg: Add
        })

    } catch (e) {
        next(new ControllerError(e.message, e.status, 'basket/addQuantity'))
    }

};
