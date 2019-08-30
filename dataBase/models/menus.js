module.exports = (sequelize, DataTypes) => {
    const menus = sequelize.define('menus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        restaurant_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        // menu_to_prod:{
        //     type: DataTypes.INTEGER,
        //     foreignKey:true
        // }
    }, {
        tableName: 'menus',
        timestamps: false
    });
    // const restaurants = sequelize.import('./restaurants.js');
    // menus.belongsTo(restaurants, {foreignKey: 'restaurant_id'});
    //
    // const product_to_menu = sequelize.import('./product_to_menu.js');
    // menus.belongsTo(product_to_menu, {foreignKey: 'menu_to_prod'});

    return menus
};