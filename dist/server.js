"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
// import swaggerUi from 'swagger-ui-express'
// import swaggerDocs from './swagger.json'
var app = (0, express_1.default)();
var PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.listen(PORT, function () {
    console.log("Server is listening at http://localhost:" + PORT);
});
app.get('/', function (req, res) {
    return res.json({
        message: 'API Aldisel, acesse a documentação digitando ao fim da barra de pesquisa api-docs'
    });
});
