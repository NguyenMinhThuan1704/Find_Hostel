"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PackageService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PackageService.hasMany(models.PostPackage, {
        foreignKey: "packageId",
        as: "postPackages",
      });
    }
  }
  PackageService.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.STRING,
      star: DataTypes.STRING,
      duration: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PackageService",
    }
  );
  return PackageService;
};
