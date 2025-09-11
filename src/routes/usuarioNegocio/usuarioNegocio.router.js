import { Router } from "express";
import { registrarUsuarioNegocioController, loginUsuarioNegocioController } from "../../controllers/usuarioNegocio.controller.js";
import logger from "../../middlewares/logger.js"

export const usuarioNegocioRouter = Router();

// RUTAS

// Crear nuevo usuarioNegocio
usuarioNegocioRouter.post("/nuevo/usuario", registrarUsuarioNegocioController);
usuarioNegocioRouter.post("/login", loginUsuarioNegocioController);


// TEST
usuarioNegocioRouter.get("/test", (req, res) => {
    logger.info("Se utilizo el test de usuarioNegocioRouter")
    res.send('Router Usuario Negocio Funcionando OK')
})