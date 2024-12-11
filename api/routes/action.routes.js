import { Router } from "express"
import { getAllActions, getOneDayActions, getFromToActions, createAction } from "../controllers/action.controller.js"

export const actionRouter = Router()

actionRouter.get("/:device", getAllActions)
actionRouter.get("/:device/:day", getOneDayActions)
actionRouter.get("/:device/:from/:to", getFromToActions)
actionRouter.post("/", createAction)