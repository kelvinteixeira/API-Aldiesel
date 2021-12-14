"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
exports.default = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.host,
            user: process.env.user,
            database: process.env.database,
            password: process.env.password,
            port: 3306,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds')
        }
    }
};
