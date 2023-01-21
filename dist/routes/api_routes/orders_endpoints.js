"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validateAuthenticate_1 = require("../../middlewares/validateAuthenticate");
var orders_handlers_1 = require("../../handler_files/orders_handlers");
var dashboard_handler_1 = require("../../handler_files/dashboard_handler");
var orders_router = express_1.default.Router();
orders_router.post("/orders", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    var _a = req.body, order_id = _a.order_id, user_id = _a.user_id, status = _a.status;
    var order = { order_id: order_id, user_id: user_id, status: status };
    (0, orders_handlers_1.create_order)(order, res);
});
orders_router.get("/:id/orders", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    var id = parseInt(req.params.id);
    return (0, dashboard_handler_1.show_active_order)(id, res);
});
exports.default = orders_router;
