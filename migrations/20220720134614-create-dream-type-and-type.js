"use strict";

const dreamTableName = "dream";
const dreamTypeTableName = "dream-type";

const types = [
  {
    id: 1,
    type: "happy",
  },
  {
    id: 2,
    type: "sad",
  },
  {
    id: 3,
    type: "exciting",
  },
  {
    id: 4,
    type: "scary",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable(
        dreamTypeTableName,
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          type: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        },
        { transaction }
      );

      await queryInterface.createTable(
        dreamTableName,
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          date: {
            type: Sequelize.DATE,
          },
          typeId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: "dream-type",
              key: "id",
            },
          },
        },
        { transaction }
      );

      await queryInterface.bulkInsert(dreamTypeTableName, types, {
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable(dreamTableName, { transaction });
      await queryInterface.dropTable(dreamTypeTableName, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
