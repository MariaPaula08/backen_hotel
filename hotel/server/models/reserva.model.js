const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")


const ReservaSchema = mongoose.Schema({
    fechaEntrada: {
        type: Date,
    },
    estadoReserva: {
        type: String,
    },
    habitacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habitacion',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
},{    timestamps:true
})
ReservaSchema.plugin(mongoosePaginate)


module.exports = mongoose.model("Reserva", ReservaSchema)