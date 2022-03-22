"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../database/connection"));
exports.default = {
    create: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, modelo, placa, ano, cor, problema, id_cliente, entrada, data, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, modelo = _a.modelo, placa = _a.placa, ano = _a.ano, cor = _a.cor, problema = _a.problema, id_cliente = _a.id_cliente, entrada = _a.entrada;
                        data = { modelo: modelo, placa: placa, ano: ano, cor: cor, problema: problema, id_cliente: id_cliente, entrada: entrada };
                        return [4 /*yield*/, (0, connection_1.default)('carros').insert(data)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.status(201).json({
                                message: "Carro cadastrado com com sucesso!",
                                data: data
                            })];
                    case 2:
                        err_1 = _b.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_1.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    createById: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id_carros, _a, modelo, placa, ano, cor, problema, id_cliente, entrada, data, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id_carros = req.params.id_carros;
                        _a = req.body, modelo = _a.modelo, placa = _a.placa, ano = _a.ano, cor = _a.cor, problema = _a.problema, id_cliente = _a.id_cliente, entrada = _a.entrada;
                        data = { modelo: modelo, placa: placa, ano: ano, cor: cor, problema: problema, id_cliente: id_cliente, entrada: entrada };
                        return [4 /*yield*/, (0, connection_1.default)('carros').insert(data).where(id_carros)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, res.status(201).json({
                                message: "Carro cadastrado com com sucesso!",
                                data: data
                            })];
                    case 2:
                        err_2 = _b.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_2.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    list: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var carros, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, connection_1.default)('carros').orderBy('id_carros')];
                    case 1:
                        carros = _a.sent();
                        return [2 /*return*/, res.status(200).json(carros)];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_3.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    find: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id_cliente, carro, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id_cliente = req.params.id_cliente;
                        return [4 /*yield*/, (0, connection_1.default)('carros').where({ id_cliente: id_cliente })];
                    case 1:
                        carro = _a.sent();
                        return [2 /*return*/, res.status(200).json(carro)];
                    case 2:
                        err_4 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_4.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id_carros, _a, modelo, placa, ano, cor, problema, id_cliente, entrada, data, carro, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        id_carros = req.params.id_carros;
                        _a = req.body, modelo = _a.modelo, placa = _a.placa, ano = _a.ano, cor = _a.cor, problema = _a.problema, id_cliente = _a.id_cliente, entrada = _a.entrada;
                        data = { modelo: modelo, placa: placa, ano: ano, cor: cor, problema: problema, id_cliente: id_cliente, entrada: entrada };
                        return [4 /*yield*/, (0, connection_1.default)('carros').update(data).where({ id_carros: id_carros })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, (0, connection_1.default)('carros').where({ id_carros: id_carros })];
                    case 2:
                        carro = _b.sent();
                        return [2 /*return*/, res.status(200).json({
                                message: 'Dados atualizados com sucesso!',
                                carro: carro
                            })];
                    case 3:
                        err_5 = _b.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_5.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id_carros, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id_carros = req.params.id_carros;
                        return [4 /*yield*/, (0, connection_1.default)('carros').delete().where({ id_carros: id_carros })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Carro excluido com sucesso!" })];
                    case 2:
                        err_6 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_6.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
};
