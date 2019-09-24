const ControllerError = require('../../errors/ControllerError');
const {basketService} = require('../../services/index');

//Додавання кількості продукції в корзину через пряме вписування в інпут

module.exports = async (req, res, next) => {
    try {
        const {id, quantity, price} = req.body;
        const Add = await basketService.addQuantityWhenTouchInput(id, quantity, price);
        res.json({
            success: true,
            msg: Add
        })

    } catch (e) {
        next(new ControllerError(e.message, e.status, 'basket/addQuantity'))
    }

};
