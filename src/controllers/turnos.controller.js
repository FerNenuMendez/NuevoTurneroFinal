import { turnoService } from '../service/turnos.service.js'
import logger from '../middlewares/logger.js'


// Crear turno
export async function crearTurnoController(req, res) {
    try {
        const { negocio, servicio, clienteNombre, clienteEmail, fecha } = req.body;
        logger.info("Creando turno con los datos:");
        logger.info(JSON.stringify({ negocio, servicio, clienteNombre, clienteEmail, fecha }));
        // Validaciones básicas
        if (!negocio || !servicio || !clienteNombre || !clienteEmail || !fecha) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const nuevoTurno = await turnoService.crearTurno(
            negocio,
            servicio,
            clienteNombre,
            clienteEmail,
            fecha
        );

        logger.info("Turno creado con éxito:");
        logger.info(JSON.stringify(nuevoTurno));

        res.status(201).json({
            message: "Turno creado con éxito",
            turno: nuevoTurno
        });

    } catch (error) {
        logger.error(`Error en crearTurnoController: ${error.message}`);
        res.status(500).json({
            message: "Error al crear el turno",
            error: error.message
        });
    }
}

// Obtener todos los turnos
export async function obtenerTurnosController(req, res) {
    try {
        const turnos = await turnoService.obtenerTurnos();
        res.status(200).json(turnos);
    } catch (error) {
        logger.error(`Error en obtenerTurnosController: ${error.message}`);
        res.status(500).json({ message: "Error al obtener los turnos", error: error.message });
    }
}

// Obtener turno por ID
export async function obtenerTurnoPorIdController(req, res) {
    try {
        const { id } = req.params;
        const turno = await turnoService.obtenerTurnoPorId(id);

        if (!turno) {
            return res.status(404).json({ message: "Turno no encontrado" });
        }

        res.status(200).json(turno);
    } catch (error) {
        logger.error(`Error en obtenerTurnoPorIdController: ${error.message}`);
        res.status(500).json({ message: "Error al obtener el turno", error: error.message });
    }
}

// Actualizar turno
export async function actualizarTurnoController(req, res) {
    try {
        const { id } = req.params;
        const turnoActualizado = await turnoService.actualizarTurno(id, req.body);

        if (!turnoActualizado) {
            return res.status(404).json({ message: "Turno no encontrado" });
        }

        res.status(200).json({
            message: "Turno actualizado con éxito",
            turno: turnoActualizado
        });

    } catch (error) {
        logger.error(`Error en actualizarTurnoController: ${error.message}`);
        res.status(500).json({ message: "Error al actualizar el turno", error: error.message });
    }
}

// Eliminar turno
export async function eliminarTurnoController(req, res) {
    try {
        const { id } = req.params;
        const turno = await turnoService.obtenerTurnoPorId(id);

        if (!turno) {
            return res.status(404).json({ message: "Turno no encontrado" });
        }

        await turnoService.eliminarTurno(id);

        res.status(200).json({ message: "Turno eliminado con éxito" });

    } catch (error) {
        logger.error(`Error en eliminarTurnoController: ${error.message}`);
        res.status(500).json({ message: "Error al eliminar el turno", error: error.message });
    }
}