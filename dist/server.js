"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var index_1 = __importDefault(require("./routes/index"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("./config"));
var port = config_1.default.port;
var app = (0, express_1.default)();
var address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
app.use("/", index_1.default);
app.use((0, cors_1.default)({ origin: "*" }));
app.get('/', function (_req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("starting app on: ".concat(address));
});
exports.default = app;
