module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define("Burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Burger;
};
