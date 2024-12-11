import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import { deviceRouter } from "./routes/device.routes.js"
import { telemetryRouter } from "./routes/telemetry.routes.js"
import { actionRouter } from "./routes/action.routes.js"

const app = express()
const port = 3000

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://user:pass@localhost:27017/", {
            dbName: "iot"
        })
        console.log("La API se conectó a MongoDB")
    } catch (error) {
        console.error(`Falló la conexión de la API a MongoDB: ${error}`)
    }
}

app.use(bodyParser.json())
app.use("/device", deviceRouter)
app.use("/telemetry", telemetryRouter)
app.use("/action", actionRouter)

connectToMongoDB()

app.listen(port, () => {
    console.log(`La API esta funcionando en el puerto ${port}`)
})