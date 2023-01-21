"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, port = _a.port, psql_port = _a.psql_port, postgres_host = _a.postgres_host, postgres_test_DB = _a.postgres_test_DB, postgres_password = _a.postgres_password, postgres_DB = _a.postgres_DB, postgres_user = _a.postgres_user, ENV = _a.ENV, bcrypt_password = _a.bcrypt_password, salt_rounds = _a.salt_rounds, token_secret = _a.token_secret;
exports.default = {
    port: port,
    psql_port: psql_port,
    postgres_host: postgres_host,
    postgres_test_DB: postgres_test_DB,
    postgres_password: postgres_password,
    postgres_DB: postgres_DB,
    postgres_user: postgres_user,
    ENV: ENV,
    bcrypt_password: bcrypt_password,
    salt_rounds: salt_rounds,
    token_secret: token_secret
};
