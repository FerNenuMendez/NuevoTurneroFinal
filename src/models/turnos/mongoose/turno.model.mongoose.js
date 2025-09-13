import mongoose from "mongoose";

const turnoSchema = new mongoose.Schema({
    negocioNombre: { type: mongoose.Schema.Types.ObjectId, ref: "UsuarioNegocio" },
    servicio: { type: mongoose.Schema.Types.ObjectId, ref: "Servicio" },
    clienteNombre: { type: String, required: true },
    clienteEmail: { type: String, required: true },
    fecha: { type: Date, required: true },
    estado: { type: String, enum: ["pendiente", "confirmado", "cancelado"], default: "pendiente" }
}, { timestamps: true });

export default mongoose.model("Turno", turnoSchema);