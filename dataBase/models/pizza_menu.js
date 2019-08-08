module.exports = (sequelize, DataTypes) => {
    const pizza_menu = sequelize.define('pizza_menu', {
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
        }
    }, {
        tableName: 'pizza_menu',
        timestamps: false
    });


    return pizza_menu
};