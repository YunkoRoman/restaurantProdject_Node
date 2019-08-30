module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define('products', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            restaurant_id: {
                type: DataTypes.STRING,
                foreignKey: true
            },
            menu_id: {
                type: DataTypes.STRING,
                foreignKey: true
            }
        },
        {
            tableName: 'products',
            timestamps: false
        });
    // const menu = sequelize.import('./menus.js');
    // products.belongsTo(menu, {foreignKey: 'menu_id'});
    //
    // const restaurant = sequelize.import('./restaurants.js');
    // products.belongsTo(restaurant, {foreignKey: 'restaurant_id'});

    return products
};