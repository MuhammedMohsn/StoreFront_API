"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var config_1 = __importDefault(require("./config"));
var myClient1 = new pg_1.Pool({
    host: config_1.default.postgres_host,
    database: config_1.default.postgres_DB,
    user: config_1.default.postgres_user,
    password: config_1.default.postgres_password,
});
if (config_1.default.ENV === 'test') {
    myClient1 = new pg_1.Pool({
        host: config_1.default.postgres_host,
        database: config_1.default.postgres_test_DB,
        user: config_1.default.postgres_user,
        password: config_1.default.postgres_password,
    });
}
exports.default = myClient1;
