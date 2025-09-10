import { Router } from "express";
import { registrarUsuarioNegocioController } from "../../controllers/usuarioNegocio.controller.js";
import logger from "../../middlewares/logger.js"

export const usuarioNegocioRouter = Router();

// RUTAS

// Crear nuevo usuarioNegocio
usuarioNegocioRouter.post("/nuevo", registrarUsuarioNegocioController);


// TEST
usuarioNegocioRouter.get("/test", (req, res) => {
    logger.info("Se utilizo el test de usuarioNegocioRouter")
    res.send('Api Funcionando OK')
})