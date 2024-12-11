import { Router } from "express"
import { getAllDevices, getOneDevice, createDevice } from "../controllers/device.controller.js"

export const deviceRouter = Router()

deviceRouter.get("/", getAllDevices)
deviceRouter.get("/:name", getOneDevice)
deviceRouter.post("/", createDevice)