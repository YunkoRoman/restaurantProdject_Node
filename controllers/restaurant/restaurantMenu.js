const mysql = require('mysql2/promise');
const ControllerError = require('../../errors/ControllerError');
const {restaurantService} = require('../../services');



//Дістаємо з бази список меню

module.exports = async (req, res, next) => {
    try {
        const {id:restaurant_id} = req.params;
        const conn = await mysql.createConnection({  host: 'localhost', user: 'root', password:'root', database: 'restaurant_progect' });
        const [rows, fields] = await conn.execute('SELECT p.id, p.name, m.name AS m_name FROM products p INNER JOIN menus m ON p.menu_id = m.id');
        await conn.end();



        res.json({
            success: true,
            msg:rows
        });
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'restaurantMenu'))
    }

};