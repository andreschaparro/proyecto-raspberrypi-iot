import { Telemetry } from "../models/telemetry.model.js"

export const getAllTelemetries = async (req, res) => {
    const { device } = req.params

    try {
        const telemetries = await Telemetry.find({ device })

        if (telemetries.length === 0) {
            return res.status(204).json([])
        }

        res.json(telemetries)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar todas las telemetrías" })
    }
}

export const getOneDayTelemetries = async (req, res) => {
    const { device, day } = req.params

    try {
        const telemetries = await Telemetry.find({
            device,
            day
        })

        if (telemetries.length === 0) {
            return res.status(204).json([])
        }

        res.json(telemetries)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar las telemetrías de un día" })
    }
}

export const getFromToTelemetries = async (req, res) => {
    const { device, from, to } = req.params

    try {
        const telemetries = await Telemetry.find({
            device,
            day: { $gte: from, $lte: to }
        })

        if (telemetries.length === 0) {
            return res.status(204).json([])
        }

        res.json(telemetries)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar las telemetrías de varios días" })
    }
}

export const updateTelemetry = async (req, res) => {
    const { device, telemetry } = req.body

    try {
        const day = new Date().toISOString().slice(0, 10)

        const result = await Telemetry.updateOne(
            {
                day,
                device,
                nsamples: { $lt: 86400 }
            },
            {
                $push: { telemetry },
                $min: { first: telemetry.ts },
                $max: { last: telemetry.ts },
                $inc: { nsamples: 1 }
            },
            { upsert: true }
        )

        res.json(result)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al guardar una telemetría" })
    }
}

export const getLastTelemetry = async (req, res) => {
    const { device } = req.params

    try {
        const data = await Telemetry.findOne(
            { device },
            { _id: 0, last: 1, telemetry: 1 },
            {
                sort: { telemetry: -1 }
            }
        )

        if (!data) {
            return res.status(404).json({ message: "No se encontraron telemetrías" })
        }

        const {last, telemetry} = data

        const lastTelemetry = telemetry.find( item => item.ts === last)
        
        res.json(lastTelemetry)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar la última telemetría" })
    }
}