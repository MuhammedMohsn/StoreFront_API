"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_endpoints_1 = __importDefault(require("./api_routes/users_endpoints"));
var products_endpoints_1 = __importDefault(require("./api_routes/products_endpoints"));
var orders_endpoints_1 = __importDefault(require("./api_routes/orders_endpoints"));
var router = express_1.default.Router();
router.use("/users", users_endpoints_1.default);
router.use("/users", orders_endpoints_1.default);
router.use("/products", products_endpoints_1.default);
exports.default = router;
