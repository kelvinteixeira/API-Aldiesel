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
            var _a, situation, diagnosis, changeDate, mechanic, idCar, code, dtc, dtcState, idServiceOrder, actions, data, dataDtcs, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, situation = _a.situation, diagnosis = _a.diagnosis, changeDate = _a.changeDate, mechanic = _a.mechanic, idCar = _a.idCar, code = _a.code, dtc = _a.dtc, dtcState = _a.dtcState, idServiceOrder = _a.idServiceOrder, actions = _a.actions;
                        data = { situation: situation, diagnosis: diagnosis, changeDate: changeDate, mechanic: mechanic, idCar: idCar };
                        return [4 /*yield*/, (0, connection_1.default)('service_orders').insert(data)];
                    case 1:
                        _b.sent();
                        dataDtcs = [{ code: code, dtc: dtc, dtcState: dtcState, idServiceOrder: idServiceOrder, actions: actions }];
                        return [4 /*yield*/, (0, connection_1.default)('dtcs').insert(dataDtcs)];
                    case 2:
                        _b.sent();
                        // dataDtcs.map(async items => {
                        // })
                        return [2 /*return*/, res.status(201).json({
                                message: "Ordem de serviço e Dtcs cadastrados com sucesso!",
                                data: data,
                                dataDtcs: dataDtcs
                            })];
                    case 3:
                        err_1 = _b.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_1.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    list: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceOrders, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, connection_1.default)('service_orders').orderBy('id')];
                    case 1:
                        serviceOrders = _a.sent();
                        return [2 /*return*/, res.status(200).json(serviceOrders)];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_2.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    find: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, serviceOrder, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, (0, connection_1.default)('service_orders').where({ id: id })];
                    case 1:
                        serviceOrder = _a.sent();
                        return [2 /*return*/, res.status(200).json(serviceOrder)];
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
    update: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, situation, diagnosis, changeDate, mechanic, idCar, data, serviceOrder, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        id = req.params.id;
                        _a = req.body, situation = _a.situation, diagnosis = _a.diagnosis, changeDate = _a.changeDate, mechanic = _a.mechanic, idCar = _a.idCar;
                        data = { situation: situation, diagnosis: diagnosis, changeDate: changeDate, mechanic: mechanic, idCar: idCar };
                        return [4 /*yield*/, (0, connection_1.default)('service_orders').update(data).where({ id: id })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, (0, connection_1.default)('service_orders').where({ id: id })];
                    case 2:
                        serviceOrder = _b.sent();
                        return [2 /*return*/, res.status(200).json({
                                message: 'Ordem de servico atualizada com sucesso!',
                                serviceOrder: serviceOrder
                            })];
                    case 3:
                        err_4 = _b.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_4.message
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    delete: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, (0, connection_1.default)('service_orders').delete().where({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json({ message: "Ordem de servico excluida com sucesso!" })];
                    case 2:
                        err_5 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                message: err_5.message
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
};
