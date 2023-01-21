"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validateAuthenticate_1 = require("../../middlewares/validateAuthenticate");
var products_handlers_1 = require("../../handler_files/products_handlers");
var products_router = express_1.default.Router();
products_router.get("/", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    (0, products_handlers_1.show_products)(req, res);
});
products_router.get("/:id", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    var id = req.params.id;
    (0, products_handlers_1.show_product)(id, res);
});
products_router.delete("/:id", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    var id = req.params.id;
    (0, products_handlers_1.delete_product)(id, res);
});
products_router.post("/", validateAuthenticate_1.validateAuthenticate, function (req, res) {
    var product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
    };
    (0, products_handlers_1.create_product)(product, res);
});
exports.default = products_router;
