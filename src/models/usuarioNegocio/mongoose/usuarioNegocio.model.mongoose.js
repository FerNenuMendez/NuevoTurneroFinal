import mongoose from "mongoose";

const usuarioNegocioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    servicios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Servicio" }],
    extra: [{}]
}, { timestamps: true });

export default mongoose.model("UsuarioNegocio", usuarioNegocioSchema);