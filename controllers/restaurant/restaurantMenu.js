const dataBase = require('../../dataBase').getInstance();
const ControllerError = require('../../errors/ControllerError');
module.exports = async (req, res, next) => {
    try {
        const intermediate = dataBase.getModel('intermediate_table_pizza');
        const PizzaModel = dataBase.getModel('pizza_menu');
        const RestaurantModel = dataBase.getModel('restaurants');
        const id = req.params.id;
        if (!id) throw new Error('Not restaurant id');


        const Pizza = await intermediate.findAll(
            {
                include:[
                    {model: PizzaModel,
                        attributes:["id", "name", "description"]},
                    {model: RestaurantModel,




        res.json({
            success: true,
            msg: Pizza
        });
    } catch (e) {
        next( new ControllerError(e.message, e.status, 'pizza_menu'))
    }

};