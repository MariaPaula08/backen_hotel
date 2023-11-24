const Factura = require("../models/factura.model")

async function createFactura(req, res) {
    const factura = new Factura(req.body)


    factura.save((error, facturaStored) => {
        if(error) {
            res.status(400).send({msg: "Error al crear la factura"})
        } else {
            res.status(201).send(facturaStored)
        }

    })

}

async function getFactura(req, res) {

    const { page = 1, limit = 10 } = req.query

    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    }

    Factura.paginate({}, options, (error, facturas) => {
        if (error) {
            res.status(400).send({msg: "Error al obtener las facturas"})
        } else {
            res.status(200).send(facturas)
        }
    })
}


async function updateFactura(req, res) {
    const { id } = req.params
    const facturaData = req.body

    Factura.findByIdAndUpdate({ _id: id}, facturaData, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al actualizar la factura"})
        } else {
            res.status(200).send({msg: "Actualizacion correcta"})
        }
    })
}

async function deleteFactura(req, res) {
    const { id } = req.params

    Factura.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar la factura"})
        } else {
            res.status(200).send({msg: "Factura Eliminado"})
        }
    })
}

module.exports = {
    createFactura,
    getFactura,
    updateFactura,
    deleteFactura,
}