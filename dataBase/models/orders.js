module.exports = (sequelize, DataTypes) => {
    const orders = sequelize.define('orders', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            restaurant_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            },
            status_id: {
                type: DataTypes.INTEGER,
            },
            date: {
                type: DataTypes.DATE
            },
            total_price: {
                type: DataTypes.INTEGER
            },
            user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true
            }
        },
        {
            tableName: 'orders',
            timestamps: false
        });
    const order_line = sequelize.import('./orderLine');
    orders.hasMany(order_line, {foreignKey: 'order_id'});

    const orderStatus = sequelize.import('./order_status');
    orders.belongsTo(orderStatus,{foreignKey: 'status_id'});

    return orders
};