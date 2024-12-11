import mongoose from "mongoose"
const { Schema, model } = mongoose

const deviceSchema = new Schema({
    name: String,
    type: String
})

export const Device = model("Device", deviceSchema)