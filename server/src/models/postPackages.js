"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostPackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PostPackage.belongsTo(models.Post, {
        foreignKey: "postId",
        as: "post",
      });
      PostPackage.belongsTo(models.PackageService, {
        foreignKey: "packageId",
        as: "packageService",
      });
    }
  }
  PostPackage.init(
    {
      postId: DataTypes.STRING,
      packageId: DataTypes.STRING,
      startDay: DataTypes.DATE,
      endDay: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "PostPackage",
    }
  );
  return PostPackage;
};
