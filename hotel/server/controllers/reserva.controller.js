const Reserva = require("../models/reserva.model")

async function createReserva(req, res) {
    const reserva = new Reserva(req.body)


    reserva.save((error, reservaStored) => {
        if(error) {
            res.status(400).send({msg: "Error al crear la reserva"})
        } else {
            res.status(201).send(reservaStored)
        }

    })

}

async function getReserva(req, res) {

    const { page = 1, limit = 10 } = req.query

    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    }

    Reserva.paginate({}, options, (error, reservas) => {
        if (error) {
            res.status(400).send({msg: "Error al obtener las reservas"})
        } else {
            res.status(200).send(reservas)
        }
    })
}


async function updateReserva(req, res) {
    const { id } = req.params
    const reservaData = req.body

    Reserva.findByIdAndUpdate({ _id: id}, reservaData, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al actualizar la reserva"})
        } else {
            res.status(200).send({msg: "Actualizacion correcta"})
        }
    })
}

async function deleteReserva(req, res) {
    const { id } = req.params

    Reserva.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar la reserva"})
        } else {
            res.status(200).send({msg: "reserva Eliminado"})
        }
    })
}

module.exports = {
    createReserva,
    getReserva,
    updateReserva,
    deleteReserva,
}