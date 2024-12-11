import mongoose from "mongoose"
const { Schema, model } = mongoose

const actionSchema = new Schema({
    device: String,
    command: String,
    parameter: String,
    ts: Date
})

export const Action = model("Action", actionSchema)