const mongoose = require("../db.js")

const Usuario = new mongoose.Schema({
    usuario: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    }
});

const usuarioModel = mongoose.model("Usuario", Usuario);

module.exports = usuarioModel;