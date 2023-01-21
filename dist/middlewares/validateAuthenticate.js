"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthenticate = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var validateAuthenticate = function (req, _res, next) {
    try {
        var auth_header = req.headers.authorization;
        var token = auth_header === null || auth_header === void 0 ? void 0 : auth_header.split(" ")[1];
        jsonwebtoken_1.default.verify(token, config_1.default.token_secret);
        next();
    }
    catch (err) {
        console.log("the user can't access this route because it's not authorized because ".concat(err));
    }
};
exports.validateAuthenticate = validateAuthenticate;
