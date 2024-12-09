import { Router } from "express"

export const deviceRouter = Router()

deviceRouter.get("/", (req, res) => {
    console.log("Llama a getAllDevices")
    res.status(200).send("Devuelve todos los dispositivos")
})

deviceRouter.get("/:id", (req, res) => {
    console.log(`Llama a getDeviceById con el id ${req.params.id}`)
    res.status(200).send("Devuelve un dispositivo")
})

deviceRouter.post("/", (req, res) => {
    console.log("Llama a createDevice")
    res.status(201).send("Registra un dispositivo")
})