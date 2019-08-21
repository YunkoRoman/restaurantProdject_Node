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
            type: DataTypes.STRING,
            foreignKey: true
        }
    }, {
        tableName: 'menus',
        timestamps: false
    });
    const restaurants = sequelize.import('./restaurants.js');
    menus.belongsTo(restaurants, {foreignKey: 'restaurant_id'});

    return menus
};