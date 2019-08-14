module.exports = (sequelize, DataTypes) => {
    const pizzas = sequelize.define('pizzas', {
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
        tableName: 'pizzas',
        timestamps: false
    });
    const restaurants = sequelize.import('./restaurants.js');
    pizzas.belongsTo(restaurants, {foreignKey: 'restaurant_id'});

    return pizzas
};