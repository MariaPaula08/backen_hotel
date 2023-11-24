const express = require("express")
const ConsumoController = require("../controllers/consumo.controller")
const md_auth = require("../middlewares/authenticated")



const api = express.Router()

api.post("/consumo", [md_auth.asureAuth], ConsumoController.createConsumo)
api.get("/consumo", ConsumoController.getConsumo)
api.patch("/consumo/:id", [md_auth.asureAuth], ConsumoController.updateConsumo)
api.delete("/consumo/:id", [md_auth.asureAuth], ConsumoController.deleteConsumo)


module.exports = api