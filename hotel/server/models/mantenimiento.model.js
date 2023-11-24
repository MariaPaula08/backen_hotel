const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")


const MantenimientoSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
    },
    fechareporte: {
        type: Date,
        default: Date.now,
    },
    estado: {
        type: String,
        enum: ["limpia", "Limpieza Pendiente"],
        required: true,
    },
},{    timestamps:true
})

MantenimientoSchema.plugin(mongoosePaginate)


module.exports = mongoose.model("Mantenimiento", MantenimientoSchema)