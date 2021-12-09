"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var OrdemDeservicoController_1 = __importDefault(require("./controllers/OrdemDeservicoController"));
var routes = (0, express_1.Router)();
routes.post('/ordemdeservicos', OrdemDeservicoController_1.default.create);
routes.get('/ordemdeservicos', OrdemDeservicoController_1.default.list);
routes.put('/ordemdeservicos/:id', OrdemDeservicoController_1.default.update);
routes.delete('/ordemdeservicos/:id', OrdemDeservicoController_1.default.delete);
exports.default = routes;
