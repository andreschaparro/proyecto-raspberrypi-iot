import mongoose from "mongoose"
const { Schema, model } = mongoose

const telemetrySchema = new Schema({
    day: Date,
    device: String,
    nsamples: Number,
    first: Number,
    last: Number,
    telemetry: JSON
})

export const Telemetry = model("Telemetry", telemetrySchema)