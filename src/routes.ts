import { Router } from "express";

import ClientesController from "./controllers/ClientesController";
import CarrosController from "./controllers/CarrosController";
import OsController from './controllers/OsController';

const routes = Router()

routes.post('/clientes/adicionar', ClientesController.create)
routes.get('/clientes/listar', ClientesController.list)
routes.get('/clientes/encontrar/:id_cliente', ClientesController.find)
routes.put('/clientes/atualizar/:id_cliente', ClientesController.update)
routes.delete('/clientes/deletar/:id_cliente', ClientesController.delete)

routes.post('/clientes/carros/adicionar', CarrosController.create)
routes.get('/clientes/carros/listar', CarrosController.list)
routes.get('/clientes/carros/listarporcliente', CarrosController.listByClient)
routes.get('/clientes/carros/encontrar/:id_carros', CarrosController.find)
routes.put('/clientes/carros/atualizar/:id_carros', CarrosController.update)
routes.delete('/clientes/carros/deletar/:id_carros', CarrosController.delete)

routes.post('/clientes/ordemdeservicos/adicionar', OsController.create)
routes.get('/clientes/ordemdeservicos/listar', OsController.list)
routes.get('/clientes/ordemdeservicos/encontrar/:id_os', OsController.find)
routes.put('/cliente/ordemdeservicos/atualizar/:id_os', OsController.update)
routes.delete('/clientes/ordemdeservicos/deletar/:id_os', OsController.delete)

export default routes