import { Router } from "express";

import CostumerController from "./controllers/CostumersController";
import CarController from "./controllers/CarsController";
import ServiceOrderController from './controllers/ServiceOrderController';
import DtcController from './controllers/DtcController';

const routes = Router()

routes.post('/clientes/adicionar', CostumerController.create)
routes.get('/clientes/listar', CostumerController.list)
routes.get('/clientes/encontrar/:id_cliente', CostumerController.find)
routes.put('/clientes/atualizar/:id_cliente', CostumerController.update)
routes.delete('/clientes/deletar/:id_cliente', CostumerController.delete)

routes.post('/carros/adicionar', CarController.create)
routes.post('/carros/adicionar/:id_carros', CarController.createById)
routes.get('/carros/listar', CarController.list)
routes.get('/carros/encontrar/:id_carros', CarController.find)
routes.put('/carros/atualizar/:id_carros', CarController.update)
routes.delete('/carros/deletar/:id_carros', CarController.delete)

routes.post('/ordemdeservico/adicionar', ServiceOrderController.create)
routes.get('/ordemdeservico/listar', ServiceOrderController.list)
routes.get('/ordemdeservico/encontrar/:id_os', ServiceOrderController.find)
routes.put('/ordemdeservico/atualizar/:id_os', ServiceOrderController.update)
routes.delete('/ordemdeservico/deletar/:id_os', ServiceOrderController.delete)

routes.post('/dtc/adicionar', DtcController.create)
routes.get('/dtc/listar', DtcController.list)
routes.get('/dtc/encontrar/:id_dtc', DtcController.find)
routes.put('/dtc/atualizar/:id_dtc', DtcController.update)
routes.delete('/dtc/deletar/:id_dtc', DtcController.delete)

export default routes