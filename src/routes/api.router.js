import { Router, json, urlencoded } from "express"
import { usuarioNegocioRouter } from "./usuarioNegocio/usuarioNegocio.router.js"
import { turnoRouter } from "./turno/turno.router.js"


export const apiRouter = Router()

apiRouter.use(json())
apiRouter.use(urlencoded({ extended: true }))
apiRouter.use("/usuario-negocio", usuarioNegocioRouter)
apiRouter.use("/turnos", turnoRouter)