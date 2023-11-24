const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const FacturaSchema = mongoose.Schema({
    fechaEmision: {
        type: Date,
        default: Date.now,
    },
    total: {
        type: Number,
        required: true,
    },
    estadoPago: {
        type: String,
        enum: ["cancelado", "pagado", "pendiente"],
        required: true,
    },
},{    timestamps:true
}) 
FacturaSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Factura", FacturaSchema)