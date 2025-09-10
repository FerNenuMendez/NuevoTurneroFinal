import { getdaoUsuarioNegocio } from "../models/usuarioNegocio/usuarioNegocio.js";
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


}

export const usuarioNegocioService = new UsuarioNegocioService()