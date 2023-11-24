const Consumo = require("../models/consumo.model")

async function createConsumo(req, res) {
    const consumo = new Consumo(req.body)


    consumo.save((error, consumoStored) => {
        if(error) {
            res.status(400).send({msg: "Error al crear el consumo"})
        } else {
            res.status(201).send(consumoStored)
        }

    })

}

async function getConsumo(req, res) {

    const { page = 1, limit = 10 } = req.query

    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    }

    Consumo.paginate({}, options, (error, consumos) => {
        if (error) {
            res.status(400).send({msg: "Error al obtener los consumos"})
        } else {
            res.status(200).send(consumos)
        }
    })
}


async function updateConsumo(req, res) {
    const { id } = req.params
    const consumoData = req.body

    Consumo.findByIdAndUpdate({ _id: id}, consumoData, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al actualizar el consumo"})
        } else {
            res.status(200).send({msg: "Actualizacion correcta"})
        }
    })
}

async function deleteConsumo(req, res) {
    const { id } = req.params

    Consumo.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar el consumo"})
        } else {
            res.status(200).send({msg: "consumo Eliminado"})
        }
    })
}

module.exports = {
    createConsumo,
    getConsumo,
    updateConsumo,
    deleteConsumo,
}