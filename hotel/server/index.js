const mongoose = require("mongoose")
const app = require("./app.js")
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  IP_SERVER,
  API_VERSION,
} = require("./constants.js")

const PORT = process.env.POST || 4000

mongoose.set('strictQuery', false)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
    (error) => {
        if (error) throw error
        app.listen(PORT, () => {
            console.log("#################")
            console.log("### API HOTEL ###")
            console.log("#################")
            console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)
          })
    }
)