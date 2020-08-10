const Status = require("../model/status")

module.exports = {
  add: async data => {
    const { status, distancia } = data
    return Status.create({
    status,
    distancia
  })
  }
}