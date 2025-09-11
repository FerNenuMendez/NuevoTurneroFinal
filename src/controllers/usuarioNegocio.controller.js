import { usuarioNegocioService } from "../service/usuarioNegocio.service.js";
import logger from '../middlewares/logger.js'

export async function registrarUsuarioNegocioController(req, res) {
    const { nombre, email, password, direccion, telefono } = req.body;
    try {
        const nuevoUsuario = await usuarioNegocioService.registrarUsuarioNegocio(nombre, email, password, direccion, telefono);
        logger.info("Usuario Negocio Creado:")
        logger.info(JSON.stringify(nuevoUsuario))
        res.status(201).json({ message: "Usuario Negocio registrado con éxito", usuario: nuevoUsuario });
    } catch (error) {
        logger.error(`Error en el registro del usuarioNegocio: ${error.message}`);
        res.status(500).json({ message: "Error en el registro del usuarioNegocio", error: error.message });
    }
}

export async function loginUsuarioNegocioController(req, res) {
    const { email, password } = req.body;
    try {
        const usuario = await usuarioNegocioService.obtenerUsuarioNegocioPorEmail(email.toLowerCase());
        if (!usuario) {
            logger.warn(`Intento de login con email inexistente: ${email}`);
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        if (usuario) {
            const token = await usuarioNegocioService.validarPassword(usuario, password); // ✅
            if (!token) {
                return res.status(401).json({ message: "Credenciales inválidas" });
            }
            logger.info("Usuario Negocio Logueado:");
            logger.info(JSON.stringify(usuario.email));
            res.status(200).json({
                message: "Login exitoso",
                token,
                usuario: {
                    id: usuario._id,
                    nombre: usuario.nombre,
                    email: usuario.email
                }
            });

        } else {
            res.status(401).json({ message: "Credenciales inválidas" });
        }
    } catch (error) {
        logger.error(`Error en el login del usuarioNegocio: ${error.message}`);
        res.status(500).json({ message: "Error en el login del usuarioNegocio", error: error.message });
    }
}
