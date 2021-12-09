import { Router } from "express";

import OrdemDeservicoController from "./controllers/OrdemDeservicoController";

const routes = Router()

routes.post('/ordemdeservicos', OrdemDeservicoController.create)
routes.get('/ordemdeservicos', OrdemDeservicoController.list)
routes.put('/ordemdeservicos/:id', OrdemDeservicoController.update)
routes.delete('/ordemdeservicos/:id', OrdemDeservicoController.delete)

export default routes