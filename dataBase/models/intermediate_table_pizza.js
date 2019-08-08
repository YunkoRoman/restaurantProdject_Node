module.exports = (sequelize, DataTypes) => {
  const  intermediate_table_pizza = sequelize.define('intermediate_table_pizza', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      restaurant_id: {
          type: DataTypes.INTEGER,
          foreignKey: true
      },
      pizza_id: {
          type: DataTypes.INTEGER,
          foreignKey: true
      }
  }, {
      tableName: 'intermediate_table_pizza',
      timestamps: false
  });
    const restaurants = sequelize.import('./restaurants.js');
    intermediate_table_pizza.belongsTo(restaurants, {foreignKey: 'restaurant_id'});

    const pizza_menu = sequelize.import('./pizza_menu.js');
    intermediate_table_pizza.belongsTo(pizza_menu, {foreignKey: 'pizza_id'});
  return intermediate_table_pizza
};