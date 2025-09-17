import { getdaoServicio } from "../models/servicios/servicios.js";
import { getdaoUsuarioNegocio } from "../models/usuarioNegocio/usuarioNegocio.js";
import logger from "../middlewares/logger.js";

const daoServicio = getdaoServicio()
const daoUsuarioNegocio = getdaoUsuarioNegocio()

class ServiciosService {
    async crearServicio(negocioID, servicio, duracionMinutos, precio) {
        try { } catch (error) { }
    }

    async obtenerServiciosPorNegocio(negocioID) {
        try { } catch (error) { }
    }

    async modificarServicio(servicioID, servicio, duracionMinutos, precio) {
        try { } catch (error) { }
    }

    async eliminarServicio(servicioID) {
        try { } catch (error) { }
    }
}

export const serviciosService = new ServiciosService()