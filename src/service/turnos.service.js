import { getdaoTurno } from "../models/turnos/turnos.js";
import logger from '../middlewares/logger.js'

const daoTurno = getdaoTurno()

class TurneroService {

    async crearTurno(turnoData) {
        try {
            const nuevoTurno = await daoTurno.create(turnoData);
            logger.info("Turno creado:");
            logger.info(JSON.stringify(nuevoTurno));
            return nuevoTurno;
        } catch (error) {
            logger.error(`Error al crear el turno: ${error.message}`);
            throw error;
        }
    }

    async obtenerTurnos() {
        try {
            const turnos = await daoTurno.find();
            return turnos;
        } catch (error) {
            logger.error(`Error al obtener los turnos: ${error.message}`);
            throw error;
        }
    }

    async obtenerTurnoPorId(id) {
        try {
            const turno = await daoTurno.findById(id);
            return turno;
        } catch (error) {
            logger.error(`Error al obtener el turno por ID: ${error.message}`);
            throw error;
        }
    }

    async actualizarTurno(id, turnoData) {
        try {
            const turnoActualizado = await daoTurno.findByIdAndUpdate(id, turnoData, { new: true });
            return turnoActualizado;
        } catch (error) {
            logger.error(`Error al actualizar el turno: ${error.message}`);
            throw error;
        }
    }

    async eliminarTurno(id) {
        try {
            await daoTurno.findByIdAndDelete(id);
        } catch (error) {
            logger.error(`Error al eliminar el turno: ${error.message}`);
            throw error;
        }
    }
}

export const turnoService = new TurneroService();