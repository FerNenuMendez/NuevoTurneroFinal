import logger from "../middlewares/logger.js"
import dotenv from 'dotenv';

dotenv.config();

logger.info('Cargando configuracion:')

export const JWT_P_K = `${process.env.JWT_PRIVATE_KEY}`
export const COOKIE_S = `${process.env.COOKIE_S}`
export const PORT = 8080
export const MODO_EJECUCION = 'online'

logger.info('Configuracion Lista')