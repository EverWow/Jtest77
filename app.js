const express = require("express");
const { Sequelize } = require("sequelize");
//const https = require('https');
const port = 3500;
const app = express();

const servis = require("./services/config.service");

const sequelize = new Sequelize("tech7", "postgres", "123", {
  dialect: "postgres",
  port: 3000,
});

const { Dream } = require("./models/dream");
const { DreamType } = require("./models/dream.type");

//sequelize.authenticate();

app.get("/dreamJournal/getTypes", async (res) => {
  try {
    const types = await servis.nesto();
    console.log(types.map((x) => x.type));

    const data = [new DreamTypeModel(types)];

    res.send(new OkResponse(data));
  } catch (error) {
    console.log(error);
    //handleResponseException(res, error, transaction);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
