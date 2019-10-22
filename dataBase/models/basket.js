module.exports = (sequelize, DataTypes) => {
    const basket = sequelize.define('basket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        product: {
            type: DataTypes.STRING,
            // foreignKey: true
        },
        // quantity: {
        //     type: DataTypes.INTEGER
        // },
        // total_price:{
        //     type: DataTypes.INTEGER
        // },
        restaurant_id:{
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'basket',
        timestamps: false
    });
    // const users = sequelize.import('./users.js');
    // basket.belongsTo(users, {foreignKey: 'user_id'});
    //
    // const product = sequelize.import('./products.js');
    // // basket.belongsTo(product, {foreignKey: 'product_id'});
    return basket
};