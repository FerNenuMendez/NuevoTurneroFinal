import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import {
    crearTurnoController,
    obtenerTurnosController,
    obtenerTurnoPorIdController,
    actualizarTurnoController,
    eliminarTurnoController
} from "../../controllers/turnos.controller.js";

export const turnoRouter = Router();

// 🔒 todas las rutas de turnos requieren negocio logueado
turnoRouter.post("/", crearTurnoController);
turnoRouter.get("/", authMiddleware, obtenerTurnosController);
turnoRouter.get("/:id", authMiddleware, obtenerTurnoPorIdController);
turnoRouter.put("/:id", authMiddleware, actualizarTurnoController);
turnoRouter.delete("/:id", authMiddleware, eliminarTurnoController);

turnoRouter.get("/test", (req, res) => {
    logger.info("Se utilizo el test de turnoRouter")
    res.send('Router Turno Funcionando OK')
})
