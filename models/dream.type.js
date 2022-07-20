"use strict";

//SKARABUDZENO SA STACKOWERFLOW-A KOJEKAKVIH, ZA MALO DA RADI XD

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("tech7", "postgres", "123", {
  dialect: "postgres",
  port: 3000,
});

const DreamType = sequelize.define(
  "dream-type",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING(10),
      unique: true,
    },
  },
  {
    modelName: "DreamType",
    tableName: "dream-type",
    timestamps: false,
  }
);

module.exports = DreamType;
