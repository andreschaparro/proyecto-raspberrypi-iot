import { Router } from "express"

export const telemetryRouter = Router()

telemetryRouter.get("/last/:id", (req, res) => {
    console.log(`LLama a getLatestTelemetryById con el id ${req.params.id}`)
    res.status(200).send("Devuelve la última telemetría de un dispositivo")
})

telemetryRouter.get("/:id", (req, res) => {
    console.log(`LLama a getAllTelemetriesById con el id ${req.params.id}`)
    res.status(200).send("Devuelve todas las telemetrías de un dispositivo")
})

telemetryRouter.get("/:id/:day", (req, res) => {
    console.log(`Llama a getOneDayTelemetriesById con el id ${req.params.id} para el día ${req.params.day}`)
    res.status(200).send("Devuelve las telemetrías de un dispositivo durante un día")
})

telemetryRouter.get("/:id/:from/:to", (req, res) => {
    console.log(`Llama a getFromToTelemetriesById con el id ${req.params.id} desde el día ${req.params.from} hasta el ${req.params.to}`)
    res.status(200).send("Devuelve las telemetrías de un dispositivo desde un día hasta otro")
})

telemetryRouter.put("/", (req, res) => {
    console.log("LLama a updateTelemetry")
    res.status(200).send("Guarda la telemetría de un dispositivo")
})