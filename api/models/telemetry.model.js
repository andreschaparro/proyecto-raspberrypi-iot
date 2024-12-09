import mongoose from "mongoose"

const telemetrySchema = new mongoose.Schema(
    {
        day: Date,
        device: String,
        nsamples: Number,
        first: Number,
        last: Number,
        telemetry: JSON
    }
)

export const telemetryModel = mongoose.model("Telemetry", telemetrySchema)