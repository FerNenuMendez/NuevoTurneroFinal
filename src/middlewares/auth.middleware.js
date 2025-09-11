import jwt from "jsonwebtoken";
import { JWT_P_K } from "../config/config.js";
import logger from "./logger.js";

export function authMiddleware(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1]; // formato: Bearer <token>
    if (!token) {
        return res.status(401).json({ message: "Token inválido" });
    }

    try {
        const decoded = jwt.verify(token, JWT_P_K);

        // 💡 decoded = { id, email, nombre, iat, exp }
        req.user = decoded;

        next();
    } catch (error) {
        logger.error(`Error en authMiddleware: ${error.message}`);
        res.status(403).json({ message: "Token inválido o expirado" });
    }
}
