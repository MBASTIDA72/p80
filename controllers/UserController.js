const Usuarios = require("../model/usuarios")

module.exports = {
  add: async data => {
    const { usuario, senha } = data
    return Usuario.create({
    usuario,
    senha
  })
  }
}