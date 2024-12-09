import mongoose from "mongoose"

const deviceSchema = new mongoose.Schema(
    {
        name: String,
        type: String
    }
)

export const deviceModel = mongoose.model("Device", deviceSchema)