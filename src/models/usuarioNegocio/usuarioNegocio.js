import { MODO_EJECUCION } from "../../config/config.js"
import logger from '../../middlewares/logger.js'

const RUTA_USER_JSON = './db/usuarioFiles/usuarioFiles.json'

let daoUsuarioNegocio;

if (MODO_EJECUCION === "online") {
    //SINGLETON
    if (!daoUsuarioNegocio) {
        daoUsuarioNegocio = new UsuarioNegocioDaoMongoose
        logger.info('Persistiendo Usuarios en: MongoDB')
    }
} else {
    // daoUsuarioNegocio = new UsersDaoFiles(RUTA_USER_JSON) ARMAR SISTEMA DE ARCHIVOS
    logger.info('Persistiendo Usuarios en: sistema de archivos')
}
export function getdaoUsuarioNegocio() {
    return daoUsuarioNegocio
}