import { Router } from "express";

import CostumerController from "./controllers/CostumersController";
import CarController from "./controllers/CarsController";
import ServiceOrderController from './controllers/ServiceOrderController';
import DtcController from './controllers/DtcController';

const routes = Router()

routes.post('/clientes/adicionar', CostumerController.create)
routes.get('/clientes/listar', CostumerController.list)
routes.get('/clientes/encontrar/:id', CostumerController.find)
routes.put('/clientes/atualizar/:id', CostumerController.update)
routes.delete('/clientes/deletar/:id', CostumerController.delete)

routes.post('/carros/adicionar', CarController.create)
routes.post('/carros/adicionar/:id', CarController.createById)
routes.get('/carros/listar', CarController.list)
routes.get('/carros/encontrar/:id', CarController.find)
routes.put('/carros/atualizar/:id', CarController.update)
routes.delete('/carros/deletar/:id', CarController.delete)

routes.post('/ordemdeservico/adicionar', ServiceOrderController.create)
routes.get('/ordemdeservico/listar', ServiceOrderController.list)
routes.get('/ordemdeservico/encontrar/:id', ServiceOrderController.find)
routes.put('/ordemdeservico/atualizar/:id', ServiceOrderController.update)
routes.delete('/ordemdeservico/deletar/:id', ServiceOrderController.delete)

routes.post('/dtc/adicionar', DtcController.create)
routes.get('/dtc/listar', DtcController.list)
routes.get('/dtc/encontrar/:id', DtcController.find)
routes.put('/dtc/atualizar/:id', DtcController.update)
routes.delete('/dtc/deletar/:id', DtcController.delete)

export default routes