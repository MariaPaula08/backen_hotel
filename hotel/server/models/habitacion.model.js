const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")


const HabitacionSchema = mongoose.Schema({
    tipo_habitacion: {
        type: String,
         enum: ["individual", "doble", "suite"],
    },
    localizacion: {
        type: String,
         enum: ["Cabaña", "Casa Grande", "Cabaña Vista lago"],
    },
    precio: {
        type: Number,
        required: true,
    },
    numero_habitacion: {
        type: Number,
        required: true,
    },
    disponible: {
        type: Boolean,
        default: false, 
    },
    reserva: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reserva',
    },
    mantenimiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mantenimiento',
    },
    },{    timestamps:true
})

HabitacionSchema.plugin(mongoosePaginate)


module.exports = mongoose.model("Habitacion", HabitacionSchema)