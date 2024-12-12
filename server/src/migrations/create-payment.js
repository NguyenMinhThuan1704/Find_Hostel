"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable("Payments", {
        payment_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        amount: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        order_code: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      })
      .then(() => {
        return queryInterface.addConstraint("Payments", {
          fields: ["userId"],
          type: "foreign key",
          name: "fk_payments_user_id",
          references: {
            table: "Users",
            field: "id",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Payments");
  },
};
