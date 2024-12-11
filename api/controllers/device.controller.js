import { Device } from "../models/device.model.js"

export const getAllDevices = async (req, res) => {
    try {
        const devices = await Device.find()

        if (devices.length === 0) {
            return res.status(204).json([])
        }

        res.json(devices)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar los dispositivos" })
    }
}

export const getOneDevice = async (req, res) => {
    const { name } = req.params

    try {
        const device = await Device.findOne({ name })

        if (!device) {
            return res.status(404).json({ message: "No se encontró el dispositivo" })
        }

        res.json(device)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al solicitar el dispositivo" })
    }
}

export const createDevice = async (req, res) => {
    const { name, type } = req.body

    if (!name || !type) {
        return res.status(400).json({ message: "Los campos name y type son obligatorios" })
    }

    try {
        const existingDevice = await Device.findOne({ name })

        if (existingDevice) {
            return res.status(409).json({ message: "El dispositivo ya existe" })
        }

        const device = new Device({
            name,
            type
        })

        const newDevice = await device.save()

        res.status(201).json(newDevice)
    } catch (error) {
        res.status(500).json({ message: error.message || "Error al crear el dispositivo" })
    }
}