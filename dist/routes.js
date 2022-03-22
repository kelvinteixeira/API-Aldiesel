"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CostumersController_1 = __importDefault(require("./controllers/CostumersController"));
var CarsController_1 = __importDefault(require("./controllers/CarsController"));
var ServiceOrderController_1 = __importDefault(require("./controllers/ServiceOrderController"));
var DtcController_1 = __importDefault(require("./controllers/DtcController"));
var routes = (0, express_1.Router)();
routes.post('/clientes/adicionar', CostumersController_1.default.create);
routes.get('/clientes/listar', CostumersController_1.default.list);
routes.get('/clientes/encontrar/:id', CostumersController_1.default.find);
routes.put('/clientes/atualizar/:id', CostumersController_1.default.update);
routes.delete('/clientes/deletar/:id', CostumersController_1.default.delete);
routes.post('/carros/adicionar', CarsController_1.default.create);
routes.post('/carros/adicionar/:id', CarsController_1.default.createById);
routes.get('/carros/listar', CarsController_1.default.list);
routes.get('/carros/encontrar/:id', CarsController_1.default.find);
routes.put('/carros/atualizar/:id', CarsController_1.default.update);
routes.delete('/carros/deletar/:id', CarsController_1.default.delete);
routes.post('/ordemdeservico/adicionar', ServiceOrderController_1.default.create);
routes.get('/ordemdeservico/listar', ServiceOrderController_1.default.list);
routes.get('/ordemdeservico/encontrar/:id', ServiceOrderController_1.default.find);
routes.put('/ordemdeservico/atualizar/:id', ServiceOrderController_1.default.update);
routes.delete('/ordemdeservico/deletar/:id', ServiceOrderController_1.default.delete);
routes.post('/dtc/adicionar', DtcController_1.default.create);
routes.get('/dtc/listar', DtcController_1.default.list);
routes.get('/dtc/encontrar/:id', DtcController_1.default.find);
routes.put('/dtc/atualizar/:id', DtcController_1.default.update);
routes.delete('/dtc/deletar/:id', DtcController_1.default.delete);
exports.default = routes;
