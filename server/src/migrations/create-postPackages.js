"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PostPackages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      postId: {
        type: Sequelize.STRING,
      },
      packageId: {
        type: Sequelize.INTEGER,
      },
      startDay: {
        type: Sequelize.DATE,
      },
      endDay: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PostPackages");
  },
};
