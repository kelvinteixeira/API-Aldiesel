import { Router } from "express";

import OsController from './controllers/OrdemDeServicoController';
const routes = Router()

routes.post('/ordemdeservicos', OsController.create)
routes.get('/ordemdeservicos', OsController.list)
routes.get('/ordemdeservicos/:id', OsController.find)
routes.put('/ordemdeservicos/editar/:id', OsController.update)
routes.delete('/ordemdeservicos/:id', OsController.delete)

export default routes