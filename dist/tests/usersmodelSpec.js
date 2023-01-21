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
var users_model_1 = require("../models/users_model");
var database_1 = __importDefault(require("../database"));
var user_model = new users_model_1.UsersTable();
describe("test users_model_methods exist or not", function () {
    it("test if index method exists or not", function () {
        expect(user_model.index).toBeDefined();
    });
    it("test if show method exists or not", function () {
        expect(user_model.show).toBeDefined();
    });
    it("test if create method exists or not", function () {
        expect(user_model.create).toBeDefined();
    });
});
describe("test the output of users_model_methods", function () {
    var user_test = {
        "email": "m1@gmail.com",
        "id": 20,
        "firstname": "Muhammed",
        "lastname": "Mohsen",
        "password": "asdf",
    };
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var created_user, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_model.create(user_test)];
                case 1:
                    created_user = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log("we cannot create user because ".concat(err_1));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("test the output of show method ", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_model.show(user_test.id)];
                case 1:
                    user = _a.sent();
                    expect(user).toEqual(user_test);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log("we cannot show user because ".concat(err_2));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("test the output of create method", function () { return __awaiter(void 0, void 0, void 0, function () {
        var created_user, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_model.create(user_test)];
                case 1:
                    created_user = _a.sent();
                    expect(created_user).toEqual('the user is existed or id is duplicated');
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.log("we cannot create user because ".concat(err_3));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("test the output of create method", function () { return __awaiter(void 0, void 0, void 0, function () {
        var created_user, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_model.create({
                            email: "m2@gmail.com",
                            id: 21,
                            firstname: "Muhammed",
                            lastname: "Mohsen",
                            password: "asdf",
                        })];
                case 1:
                    created_user = _a.sent();
                    expect(created_user).not.toEqual('the user is existed');
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.log("we cannot create user because ".concat(err_4));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("test the output of index method ", function () { return __awaiter(void 0, void 0, void 0, function () {
        var users, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_model.index()];
                case 1:
                    users = _a.sent();
                    expect(users === null || users === void 0 ? void 0 : users.length).not.toBeNull;
                    return [3 /*break*/, 3];
                case 2:
                    err_5 = _a.sent();
                    console.log("we cannot show users because ".concat(err_5));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    it("tests the authentication of users endpoints", function () { return __awaiter(void 0, void 0, void 0, function () {
        var authenticate_user, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, user_model.authentication("m1@gmail.com", "aasdf")];
                case 1:
                    authenticate_user = _a.sent();
                    expect(authenticate_user === null || authenticate_user === void 0 ? void 0 : authenticate_user.password).not.toBe(user_test.password);
                    return [3 /*break*/, 3];
                case 2:
                    err_6 = _a.sent();
                    console.log("we cannot  authenticate users because ".concat(err_6));
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var connection, sql1, sql2, sql3, sql4, err_7;
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
                    err_7 = _a.sent();
                    console.log(err_7);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
});
