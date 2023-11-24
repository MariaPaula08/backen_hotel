const Mantenimiento = require("../models/mantenimiento.model")

async function createMantenimiento(req, res) {
    const mantenimiento = new Mantenimiento(req.body)


    mantenimiento.save((error, mantenimientoStored) => {
        if(error) {
            res.status(400).send({msg: "Error al crear el mantenimiento"})
        } else {
            res.status(201).send(mantenimientoStored)
        }

    })

}

async function getMantenimiento(req, res) {

    const { page = 1, limit = 10 } = req.query

    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    }

    Mantenimiento.paginate({}, options, (error, mantenimientos) => {
        if (error) {
            res.status(400).send({msg: "Error al obtener los mantenimientos"})
        } else {
            res.status(200).send(mantenimientos)
        }
    })
}


async function updateMantenimiento(req, res) {
    const { id } = req.params
    const mantenimientoData = req.body

    Mantenimiento.findByIdAndUpdate({ _id: id}, mantenimientoData, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al actualizar el mantenimiento"})
        } else {
            res.status(200).send({msg: "Actualizacion correcta"})
        }
    })
}

async function deleteMantenimiento(req, res) {
    const { id } = req.params

    Mantenimiento.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar el mantenimiento"})
        } else {
            res.status(200).send({msg: "mantenimiento Eliminado"})
        }
    })
}

module.exports = {
    createMantenimiento,
    getMantenimiento,
    updateMantenimiento,
    deleteMantenimiento,
}