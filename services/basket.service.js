const dataBase = require('../dataBase').getInstance();
const ControllerError = require('../errors/ControllerError');

class basketService {
    uploadProduct(id) {
        const basketModel = dataBase.getModel('basket');
        const productModel = dataBase.getModel('products');
        try {

            return basketModel.findAll({
                include: [{
                    model: productModel,
                    attributes: ["id", "name", 'menu_id']
                }],
                where: {
                    user_id: id
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/uploadProduct')
        }
    }

    deleteProduct(basketProductId) {
        const basketModel = dataBase.getModel('basket');
        try {

            return basketModel.destroy({
                where: {
                    id:basketProductId
                }
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/deleteProduct')
        }

    }

    addProduct(product_id, user_id) {
        const basketModel = dataBase.getModel('basket');
        try {
            return basketModel.create({
                product_id,
                user_id
            })
        } catch (e) {
            throw new ControllerError(e.parent.sqlMessage, 500, 'basketService/addProduct')
        }
    }
}


module.exports = new basketService();