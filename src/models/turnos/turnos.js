import { MODO_EJECUCION } from "../../config/config.js"
import Turno from "./mongoose/turno.model.mongoose.js"
import logger from '../../middlewares/logger.js'

const RUTA_TURNO_JSON = './db/turnoFiles/turnoFiles.json'

let daoTurno;

if (MODO_EJECUCION === "online") {
    //SINGLETON
    if (!daoTurno) {
        daoTurno = new Turno
        logger.info('Persistiendo Turnos en: MongoDB')
    }
} else {
    //  ARMAR SISTEMA DE ARCHIVOS
    logger.info('Persistiendo Turnos en: sistema de archivos')
}
export function getdaoTurno() {
    return daoTurno
}