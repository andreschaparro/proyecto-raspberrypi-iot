import mongoose from "mongoose"

const actionSchema = new mongoose.Schema(
    {
        device: String,
        command: String,
        parameter: String,
        ts: Date
    }
)

export const actionModel = mongoose.model("Action", actionSchema)