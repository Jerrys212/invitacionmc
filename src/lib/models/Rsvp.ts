import mongoose, { Schema, model, models } from "mongoose";

const RsvpSchema = new Schema(
    {
        nombre: { type: String, required: true },
        asistencia: { type: Boolean, required: true },
        acompañantes: { type: [String], default: [] },
        pases: { type: Number, required: true },
    },
    { timestamps: true }
);

const Rsvp = models.Rsvp || model("Rsvp", RsvpSchema);

export default Rsvp;