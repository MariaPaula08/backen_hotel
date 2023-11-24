const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const CajaSchema = mongoose.Schema({
    baseCaja: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
      },
    fechaApertura: {
        type: Date,
        default: Date.now
      },
    fechaCierre: {
        type: Date
      },
    totalVentas: {
        type: Number,
        default: 0
      },
    facturas: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Factura',
          numero: {
            type: String,
            required: true
          },
        }
      ]
    },{    timestamps:true
})

CajaSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("Caja", CajaSchema)