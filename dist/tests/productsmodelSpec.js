"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var products_model_1 = require("../models/products_model");
var database_1 = __importDefault(require("../database"));
var products_model = new products_model_1.ProductsTable();
describe('test products_model_methods exist or not', function () {
    it('test if index method exists or not', function () {
        expect(products_model.index).toBeDefined();
    });
    it('test if show method exists or not', function () {
        expect(products_model.show).toBeDefined();
    });
    it('test if create method exists or not', function () {
        expect(products_model.create).toBeDefined();
    });
    it('test if delete method exists or not', function () {
        expect(products_model.delete).toBeDefined();
    });
});
describe('test the output of products_model_methods', function () {
    var product_test = { id: 11, name: 'p', price: 10 };
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var created_product, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, products_model.create(product_test)];
                case 1:
                    created_product = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log("we cannot create product because ".concat(err_1));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it('test the output of index method ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var products, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, products_model.index()];
                case 1:
                    products = _a.sent();
                    expect(products === null || products === void 0 ? void 0 : products.length).toBeDefined();
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log("we cannot show all products because ".concat(err_2));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it('test the output of show method ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var product, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, products_model.show(product_test.id)];
                case 1:
                    product = _a.sent();
                    expect(product).not.toEqual({
                        id: 11, name: 'p', price: 12
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.log("we cannot show this product because ".concat(err_3));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it('test the output of delete method ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var product, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, products_model.delete(product_test.id)];
                case 1:
                    product = _a.sent();
                    expect(product).not.toBeDefined();
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.log("we cannot delete this product because ".concat(err_4));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it('test the output of create method', function () { return __awaiter(void 0, void 0, void 0, function () {
        var created_product, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, products_model.create({
                            id: 21, name: "j", price: 66
                        })];
                case 1:
                    created_product = _a.sent();
                    expect(created_product).not.toEqual({ id: 20, name: "j", price: 66 });
                    expect(created_product).toEqual({ id: 21, name: "j", price: 66 });
                    return [3 /*break*/, 3];
                case 2:
                    err_5 = _a.sent();
                    console.log("we cannot create this product because ".concat(err_5));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var connection, sql1, sql2, sql3, sql4, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, database_1.default.connect()];
                case 1:
                    connection = _a.sent();
                    sql1 = "DELETE FROM orders_products";
                    sql2 = "DELETE FROM orders";
                    sql3 = "DELETE FROM products";
                    sql4 = "DELETE FROM users";
                    return [4 /*yield*/, connection.query(sql1)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.query(sql2)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connection.query(sql3)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, connection.query(sql4)];
                case 5:
                    _a.sent();
                    connection.release();
                    return [3 /*break*/, 7];
                case 6:
                    err_6 = _a.sent();
                    console.log(err_6);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
});
