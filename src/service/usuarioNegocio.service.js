import { getdaoUsuarioNegocio } from "../models/usuarioNegocio/usuarioNegocio.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_P_K } from "../config/config.js";
import logger from '../middlewares/logger.js'

const daoUsuarioNegocio = getdaoUsuarioNegocio()

class UsuarioNegocioService {

    async registrarUsuarioNegocio(nombre, email, password, direccion, telefono) {
        try {
            const existe = await daoUsuarioNegocio.findOne({ email: email })
            if (existe) {
                throw new Error(`El usuario con el email ${email} ya existe.`)
            }
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const nuevoUsuario = {
                nombre,
                email,
                passwordHash: hash,
                direccion,
                telefono
            };
            const resultado = await daoUsuarioNegocio.create(nuevoUsuario);
            return resultado;
        } catch (error) {
            logger.error(`Error en el registro del usuarioNegocio: ${error.message}`);
            throw error;
        }
    }

    async obtenerUsuarioNegocioPorEmail(email) {
        try {
            const usuario = await daoUsuarioNegocio.findOne({ email: email });
            return usuario;
        } catch (error) {
            logger.error(`Error al obtener el usuarioNegocio por email: ${error.message}`);
            throw error;
        }
    }

    async validarPassword(usuario, password) {
        try {
            const esValido = await bcrypt.compare(password, usuario.passwordHash);
            if (esValido) {
                const token = jwt.sign(
                    { id: usuario._id },
                    JWT_P_K,
                    { expiresIn: '1h' }
                );
                return token;
            }
            return null;
        } catch (error) {
            logger.error(`Error al validar la contraseña: ${error.message}`);
            throw error;
        }
    }


}

export const usuarioNegocioService = new UsuarioNegocioService()