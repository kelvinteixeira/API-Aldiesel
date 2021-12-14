"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var OrdemDeServicoController_1 = __importDefault(require("./controllers/OrdemDeServicoController"));
var routes = (0, express_1.Router)();
routes.post('/ordemdeservicos', OrdemDeServicoController_1.default.create);
routes.get('/ordemdeservicos', OrdemDeServicoController_1.default.list);
routes.put('/ordemdeservicos/:id', OrdemDeServicoController_1.default.update);
routes.delete('/ordemdeservicos/:id', OrdemDeServicoController_1.default.delete);
exports.default = routes;
