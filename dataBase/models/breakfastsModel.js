module.exports = (sequelize, DataTypes) => {
    const breakfasts = sequelize.define('breakfasts', {
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
        }
    }, {
        tableName: 'breakfasts',
        timestamps: false
    });
    const restaurants = sequelize.import('./restaurants.js');
    breakfasts.belongsTo(restaurants, {foreignKey: 'restaurant_id'});

    return breakfasts
};