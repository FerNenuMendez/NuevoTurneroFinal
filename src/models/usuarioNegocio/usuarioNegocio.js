import { MODO_EJECUCION } from "../../config/config.js"
import UsuarioNegocio from "./mongoose/usuarioNegocio.model.mongoose.js"
import logger from '../../middlewares/logger.js'

const RUTA_USER_JSON = './db/usuarioFiles/usuarioFiles.json'

let daoUsuarioNegocio;

if (MODO_EJECUCION === "online") {
    //SINGLETON
    if (!daoUsuarioNegocio) {
        daoUsuarioNegocio = UsuarioNegocio
        logger.info('Persistiendo Usuarios en: MongoDB')
    }
} else {
    // daoUsuarioNegocio = new UsersDaoFiles(RUTA_USER_JSON) ARMAR SISTEMA DE ARCHIVOS
    logger.info('Persistiendo Usuarios en: sistema de archivos')
}
export function getdaoUsuarioNegocio() {
    return daoUsuarioNegocio
}