import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema({
    negocioID: { type: mongoose.Schema.Types.ObjectId, ref: "UsuarioNegocio" },
    servicio: { type: String, required: true },
    duracionMinutos: { type: Number, required: true },
    precio: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model("Servicio", servicioSchema);