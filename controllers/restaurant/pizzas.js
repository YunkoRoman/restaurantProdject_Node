const dataBase = require('../../dataBase').getInstance();
const ControllerError = require('../../errors/ControllerError');
module.exports = async (req, res, next) => {
    try {
        const PizzaModel = dataBase.getModel('pizzas');
        const RestaurantModel = dataBase.getModel('restaurants');
        const id = req.params.id;
        if (!id) throw new Error('Not restaurant id');

        const Pizza = await PizzaModel.findAll(
            {
                include:[
                    {model: RestaurantModel,
                        attributes:["id", "name", "description"]}
                ],
                where: {
                    restaurant_id: id
                }
            });

        res.json({
            success: true,
            msg: Pizza
        });
    } catch (e) {
        next( new ControllerError(e.message, e.status, 'pizzas'))
    }

};