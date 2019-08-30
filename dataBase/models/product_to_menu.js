module.exports = (sequelize, DataTypes) => {
    const product_to_menu = sequelize.define('product_to_menu', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        menu_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
    }, {
        tableName: 'product_to_menu',
        timestamps: false
    });
    const products = sequelize.import('./products.js');
    product_to_menu.belongsTo(products,{foreignKey:'product_id'});

    const menus = sequelize.import('./menus.js');
    product_to_menu.belongsTo(menus, {foreignKey:'menu_id'});
    return product_to_menu
};