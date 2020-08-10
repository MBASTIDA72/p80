const mongoose = require("../db.js")

const Status = new mongoose.Schema({
    status: {
      type: String,
      required: true
    },
    distancia: {
      type: String,
      required: true
    }
});

const statusModel = mongoose.model("Status", Status);

module.exports = statusModel;