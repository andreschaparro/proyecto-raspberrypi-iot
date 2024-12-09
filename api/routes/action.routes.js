import { Router } from "express"

export const actionRouter = Router()

actionRouter.get("/last/:id", (req, res) => {
    console.log(`LLama a getLatestActionById con el id ${req.params.id}`)
    res.status(200).send("Devuelve la última acción de un dispositivo")
})

actionRouter.get("/:id", (req, res) => {
    console.log(`LLama a getAllActionsById con el id ${req.params.id}`)
    res.status(200).send("Devuelve todas las acciones de un dispositivo")
})

actionRouter.get("/:id/:day", (req, res) => {
    console.log(`Llama a getOneDayActionsById con el id ${req.params.id} para el día ${req.params.day}`)
    res.status(200).send("Devuelve las acciones de un dispositivo durante un día")
})

actionRouter.get("/:id/:from/:to", (req, res) => {
    console.log(`Llama a getFromToActionsById con el id ${req.params.id} desde el día ${req.params.from} hasta el ${req.params.to}`)
    res.status(200).send("Devuelve las acciones de un dispositivo desde un día hasta otro")
})

actionRouter.put("/", (req, res) => {
    console.log("LLama a updateAction")
    res.status(200).send("Guarda la acción de un dispositivo")
})