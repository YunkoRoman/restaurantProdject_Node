module.exports = (sequelize, DataTypes) => {
    const basket = sequelize.define('basket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },

        user_id: {
            type: DataTypes.STRING,
            foreignKey: true
        }
    }, {
        tableName: 'basket',
        timestamps: false
    });
    const users = sequelize.import('./users.js');
    basket.belongsTo(users, {foreignKey: 'user_id'});

    return basket
};