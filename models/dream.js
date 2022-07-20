("use strict");

//BUKVALNO KREIRANO PO TEMPLEJTU, RASPADA SE

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dream extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dream.DreamType = Dream.hasOne(models.DreamType, {
        as: "typeId",
        foreignKey: "id",
      });
    }
  }
  Dream.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Dream",
      timestamps: false,
    }
  );
  return Dream;
};
