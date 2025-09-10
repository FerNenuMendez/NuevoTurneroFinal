import { usuarioNegocioService } from "../service/usuarioNegocio.service.js";
import logger from '../middlewares/logger.js'

export async function registrarUsuarioNegocioController(req, res) {
    const { nombre, email, password } = req.body;
    try {
        const nuevoUsuario = await usuarioNegocioService.registrarUsuarioNegocio(nombre, email, password);
        logger.info("Usuario Negocio Creado:")
        logger.info(JSON.stringify(nuevoUsuario))
        res.status(201).json({ message: "Usuario Negocio registrado con éxito", usuario: nuevoUsuario });
    } catch (error) {
        logger.error(`Error en el registro del usuarioNegocio: ${error.message}`);
        res.status(500).json({ message: "Error en el registro del usuarioNegocio", error: error.message });
    }
}
