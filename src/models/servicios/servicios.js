import { MODO_EJECUCION } from "../../config/config.js"
import Servicio from "./mongoose/servicio.model.mongoose.js"
import logger from '../../middlewares/logger.js'

const RUTA_SERVICIO_JSON = './db/servicioFiles/servicioFiles.json'

let daoServicio;


if (MODO_EJECUCION === "online") {
    //SINGLETON
    if (!daoServicio) {
        daoServicio = Servicio
        logger.info('Persistiendo Servicios en: MongoDB')
    }
} else {
    //  ARMAR SISTEMA DE ARCHIVOS
    logger.info('Persistiendo Servicios en: sistema de archivos')
}
export function getdaoServicio() {
    return daoServicio
}