"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validateAuthenticate_1 = require("../../middlewares/validateAuthenticate");
var users_handlers_1 = require("../../handler_files/users_handlers");
var users_router = express_1.default.Router();
users_router.get("/", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    (0, users_handlers_1.show_all_users)(req, res);
});
users_router.post("/", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    var _a = req.body, email = _a.email, id = _a.id, firstname = _a.firstname, lastname = _a.lastname, password = _a.password;
    var user = { email: email, id: id, firstname: firstname, lastname: lastname, password: password };
    (0, users_handlers_1.create_user)(user, res);
});
users_router.post("/authentication", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    return (0, users_handlers_1.authenticate_user)(email, password, res);
});
users_router.get("/:id", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    var id = req.params.id;
    return (0, users_handlers_1.show_user)(id, res);
});
exports.default = users_router;
