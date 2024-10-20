"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { foreignKey: "roleId", as: "role" });
      User.hasMany(models.Post, { foreignKey: "userId", as: "user" });
      User.hasMany(models.Contact, { foreignKey: "userId", as: "user1" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      zalo: DataTypes.STRING,
      fbUrl: DataTypes.STRING,
      avatar: DataTypes.BLOB,
      email: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
