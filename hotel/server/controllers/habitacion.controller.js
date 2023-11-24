const Habitacion = require("../models/habitacion.model")

async function createHabitacion(req, res) {
    const habitacion = new Habitacion(req.body)

    const ahora = new Date();
    const ultimaActualizacion = habitacion.updatedAt;

    const tiempoDesdeUltimaActualizacion = ahora - ultimaActualizacion;
        const limiteDeTiempo = 24 * 60 * 60 * 1000;

    habitacion.save((error, habitacionStored) => {
        if(error) {
            res.status(400).send({msg: "Error al crear la habitacion"})
        } else {
            res.status(201).send(habitacionStored)
        }

    })
}

async function getHabitacion(req, res) {
    const { page = 1, limit = 10 } = req.query;

    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        populate: [{ path: 'reserva' }, { path: 'mantenimiento' }],
    };

    Habitacion.paginate({}, options, (error, habitacions) => {
        if (error) {
            res.status(400).send({ msg: "Error al obtener las habitaciones" });
        } else {
            res.status(200).send(habitacions);
        }
    });
}



async function updateHabitacion(req, res) {
    const { id } = req.params
    const habitacionData = req.body

    Habitacion.findByIdAndUpdate({ _id: id}, habitacionData, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al actualizar el curso"})
        } else {
            res.status(200).send({msg: "Actualizacion correcta"})
        }
    })
}

async function deleteHabitacion(req, res) {
    const { id } = req.params

    Habitacion.findByIdAndDelete(id, (error) => {
        if (error) {
            res.status(400).send({msg: "Error al eliminar el curso"})
        } else {
            res.status(200).send({msg: "Curso Eliminado"})
        }
    })
}

module.exports = {
    createHabitacion,
    getHabitacion,
    updateHabitacion,
    deleteHabitacion,

}