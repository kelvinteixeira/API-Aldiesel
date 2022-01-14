import { Router } from "express";

import ClientesController from "./controllers/ClientesController";
import CarrosController from "./controllers/CarrosController";
import OsController from './controllers/OsController';
import DtcController from './controllers/DtcController';

const routes = Router()

routes.post('/clientes/adicionar', ClientesController.create)
routes.get('/clientes/listar', ClientesController.list)
routes.get('/clientes/encontrar/:id_cliente', ClientesController.find)
routes.put('/clientes/atualizar/:id_cliente', ClientesController.update)
routes.delete('/clientes/deletar/:id_cliente', ClientesController.delete)

routes.post('/clientes/carros/adicionar', CarrosController.create)
routes.post('/clientes/carros/adicionar/:id_carros', CarrosController.createById)
routes.get('/clientes/carros/listar', CarrosController.list)
routes.get('/clientes/carros/encontrar/:id_carros', CarrosController.find)
routes.put('/clientes/carros/atualizar/:id_carros', CarrosController.update)
routes.delete('/clientes/carros/deletar/:id_carros', CarrosController.delete)

routes.post('/clientes/ordemdeservico/adicionar', OsController.create)
routes.get('/clientes/ordemdeservico/listar', OsController.list)
routes.get('/clientes/ordemdeservico/encontrar/:id_os', OsController.find)
routes.put('/cliente/ordemdeservico/atualizar/:id_os', OsController.update)
routes.delete('/clientes/ordemdeservico/deletar/:id_os', OsController.delete)

routes.post('/clientes/ordemdeservico/dtc/adicionar', DtcController.create)
routes.get('/clientes/ordemdeservico/dtc/listar', DtcController.list)
routes.get('/clientes/ordemdeservico/dtc/encontrar/:id_dtc', DtcController.find)
routes.put('/cliente/ordemdeservico/dtc/atualizar/:id_dtc', DtcController.update)
routes.delete('/clientes/ordemdeservico/dtc/deletar/:id_dtc', DtcController.delete)

export default routes