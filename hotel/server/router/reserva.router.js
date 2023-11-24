const express = require("express")
const ReservaController = require("../controllers/reserva.controller")
const md_auth = require("../middlewares/authenticated")



const api = express.Router()

api.post("/reserva", [md_auth.asureAuth], ReservaController.createReserva)
api.get("/reserva", ReservaController.getReserva)
api.patch("/reserva/:id", [md_auth.asureAuth], ReservaController.updateReserva)
api.delete("/reserva/:id", [md_auth.asureAuth], ReservaController.deleteReserva)


module.exports = api