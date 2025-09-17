import { getdaoTurno } from "../models/turnos/turnos.js";
import { usuarioNegocioService } from "./usuarioNegocio.service.js"
import { transformarID } from "../middlewares/trasformID.js";
import logger from '../middlewares/logger.js'


const daoTurno = getdaoTurno()

class TurneroService {

    async crearTurno({ negocio, servicio, clienteNombre, clienteEmail, fecha }) {
        try {
        } catch (error) {
            logger.error(`Error al crear el turno: ${error.message}`);
            throw error;
        }
    }


    async obtenerTurnos() {
        try {

        } catch (error) {
            logger.error(`Error al obtener los turnos: ${error.message}`);
            throw error;
        }
    }

    async obtenerTurnoPorId(id) {
        try {

        } catch (error) {
            logger.error(`Error al obtener el turno por ID: ${error.message}`);
            throw error;
        }
    }

    async actualizarTurno(id, turnoData) {
        try {

        } catch (error) {
            logger.error(`Error al actualizar el turno: ${error.message}`);
            throw error;
        }
    }

    async eliminarTurno(id) {
        try {

        } catch (error) {
            logger.error(`Error al eliminar el turno: ${error.message}`);
            throw error;
        }
    }
}

export const turnoService = new TurneroService();