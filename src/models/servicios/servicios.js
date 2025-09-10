import mongoose from "mongoose";

const servicioSchema = new mongoose.Schema({
    negocio: { type: mongoose.Schema.Types.ObjectId, ref: "UsuarioNegocio" },
    nombre: { type: String, required: true },
    duracionMinutos: { type: Number, required: true },
    precio: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model("Servicio", servicioSchema);