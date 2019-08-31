module.exports = (sequelize, DataTypes) => {
    const basket = sequelize.define('basket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING,
            foreignKey: true
        },
        product_id: {
            type: DataTypes.STRING,
            foreignKey: true
        },
        quantity: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'basket',
        timestamps: false
    });
    const users = sequelize.import('./users.js');
    basket.belongsTo(users, {foreignKey: 'user_id'});

    const product = sequelize.import('./products.js');
    basket.belongsTo(product, {foreignKey: 'product_id'});
    return basket
};