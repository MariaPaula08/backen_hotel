const express = require("express")
const HabitacionController = require("../controllers/habitacion.controller")
const md_auth = require("../middlewares/authenticated")



const api = express.Router()

api.post("/habitacion", [md_auth.asureAuth], HabitacionController.createHabitacion)
api.get("/habitacion", HabitacionController.getHabitacion)
api.patch("/habitacion/:id", [md_auth.asureAuth], HabitacionController.updateHabitacion)
api.delete("/habitacion/:id", [md_auth.asureAuth], HabitacionController.deleteHabitacion)


module.exports = api