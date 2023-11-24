const express = require("express")
const FacturaController = require("../controllers/factura.controller")
const md_auth = require("../middlewares/authenticated")



const api = express.Router()

api.post("/factura", [md_auth.asureAuth], FacturaController.createFactura)
api.get("/factura", FacturaController.getFactura)
api.patch("/factura/:id", [md_auth.asureAuth], FacturaController.updateFactura)
api.delete("/factura/:id", [md_auth.asureAuth], FacturaController.deleteFactura)


module.exports = api