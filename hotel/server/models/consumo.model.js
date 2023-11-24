const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const ConsumoSchema = mongoose.Schema({
    producto: {
        type: String,
        required: true,
    },
    cantidad: String,
    fecha: {
        type: Date,
        default: Date.now,
    },
    habitacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'habitacion',
        
    },
    factura: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'factura',
        
    },
})

ConsumoSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Consumo", ConsumoSchema)