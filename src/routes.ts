import { Router } from "express";

import OsController from './controllers/AssinaturaController'

const routes = Router()

routes.post('/ordemdeservicos', OsController.create)
routes.get('/ordemdeservicos', OsController.list)
routes.put('/ordemdeservicos/:id', OsController.update)
routes.delete('/ordemdeservicos/:id', OsController.delete)

export default routes