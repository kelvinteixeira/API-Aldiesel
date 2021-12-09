import { Router } from "express";

import OrdemDeServicoController from "./controllers/OrdemDeServicoController";

const routes = Router()

routes.post('/ordemdeservicos', OrdemDeServicoController.create)
routes.get('/ordemdeservicos', OrdemDeServicoController.list)
routes.put('/ordemdeservicos/:id', OrdemDeServicoController.update)
routes.delete('/ordemdeservicos/:id', OrdemDeServicoController.delete)

export default routes