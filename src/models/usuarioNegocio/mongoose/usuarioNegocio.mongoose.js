import mongoose from "mongoose";

const usuarioNegocioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    servicios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Servicio" }]
}, { timestamps: true });

export default mongoose.model("UsuarioNegocio", usuarioNegocioSchema);