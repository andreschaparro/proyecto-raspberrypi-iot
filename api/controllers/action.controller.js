import { Action } from "../models/action.model.js"

export const getAllActions = async (req, res) => {
    const { device } = req.params

    try {
        const actions = await Action.find({ device })

        if (actions.length === 0) {
            return res.status(204).json([])
        }

        res.json(actions)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar todas las acciones" })
    }
}

export const getOneDayActions = async (req, res) => {
    const { device, day } = req.params

    try {
        const startDay = new Date(day)
        startDay.setUTCHours(0, 0, 0, 0)
        const endDay = new Date(day)
        endDay.setUTCHours(23, 59, 59, 999)

        const actions = await Action.find({
            device,
            ts: { $gte: startDay, $lte: endDay }
        })

        if (actions.length === 0) {
            return res.status(204).json([])
        }

        res.json(actions)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar las acciones de un día" })
    }
}

export const getFromToActions = async (req, res) => {
    const { device, from, to } = req.params

    try {
        const startDay = new Date(from)
        startDay.setUTCHours(0, 0, 0, 0)
        const endDay = new Date(to)
        endDay.setUTCHours(23, 59, 59, 999)

        const actions = await Action.find({
            device,
            ts: { $gte: startDay, $lte: endDay }
        })

        if (actions.length === 0) {
            return res.status(204).json([])
        }

        res.json(actions)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar las acciones de varios días" })
    }
}

export const createAction = async (req, res) => {
    const { device, command, parameter } = req.body

    try {
        const ts = new Date()

        const action = new Action({
            device,
            command,
            parameter,
            ts
        })

        const newAction = await action.save()
        res.json(newAction)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al guardar una acción" })
    }
}