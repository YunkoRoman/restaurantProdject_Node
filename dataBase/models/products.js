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
        menu_id: {
            type: DataTypes.STRING,
            foreignKey: true
        }
    },
        {
        tableName: 'products',
        timestamps: false
    });
    const menu = sequelize.import('./menus.js');
    products.belongsTo(menu, {foreignKey: 'menu_id'});

    return products
};