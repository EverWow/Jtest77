let instance = null;
const { isNil } = require("lodash");

const DreamType = require("../models/dream.type");
const Dream = require("../models/dream");

class MaDaj {
  async nesto() {
    const res = await DreamType.findAll();
    console.log(res);

    return res;
  }
}

module.exports = (() => {
  if (isNil(instance)) {
    instance = new MaDaj();
  }

  return instance;
})();
