import express from "express"
import { deviceRouter } from "./routes/device.routes.js"
import { telemetryRouter } from "./routes/telemetry.routes.js"
import { actionRouter } from "./routes/action.routes.js"

const app = express()
const port = 3000

app.use("/device", deviceRouter)
app.use("/telemetry", telemetryRouter)
app.use("/action", actionRouter)

app.listen(port, () => { 
    console.log(`La API esta funcionando en el puerto ${port}`)
})