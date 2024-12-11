import { Router } from "express"
import { getLastTelemetry, getAllTelemetries, getOneDayTelemetries, getFromToTelemetries, updateTelemetry } from "../controllers/telemetry.controller.js"

export const telemetryRouter = Router()

telemetryRouter.get("/last/:device", getLastTelemetry)
telemetryRouter.get("/:device", getAllTelemetries)
telemetryRouter.get("/:device/:day", getOneDayTelemetries)
telemetryRouter.get("/:device/:from/:to", getFromToTelemetries)
telemetryRouter.put("/", updateTelemetry)