const express = require("express")
const MantenimientoController = require("../controllers/mantenimiento.controller")
const md_auth = require("../middlewares/authenticated")



const api = express.Router()

api.post("/mantenimiento", [md_auth.asureAuth], MantenimientoController.createMantenimiento)
api.get("/mantenimiento", MantenimientoController.getMantenimiento)
api.patch("/mantenimiento/:id", [md_auth.asureAuth], MantenimientoController.updateMantenimiento)
api.delete("/mantenimiento/:id", [md_auth.asureAuth], MantenimientoController.deleteMantenimiento)


module.exports = api