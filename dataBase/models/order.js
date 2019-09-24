module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
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
        },
        restaurant_id: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'order',
        timestamps: false
    });

    return order
};