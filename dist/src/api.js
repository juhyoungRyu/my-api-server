"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = require("../main");
const genUtil_1 = require("./util/genUtil");
const dataApi = express_1.default.Router();
dataApi.post("/get", (req, res) => {
    const objReturn = {
        success: true,
        data: main_1.testDb.datas,
        error: (0, genUtil_1.getDefaultErrorModel)(),
    };
    res.send(objReturn);
    return;
});
dataApi.post("/create", (req, res) => {
    var _a;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.name) === undefined) {
        res.send((0, genUtil_1.makeError)("NoParameterException : name"));
        return;
    }
    const objReturn = {
        success: true,
        data: {
            id: (0, genUtil_1.getUuid)(),
            name: req.body.name,
        },
        error: (0, genUtil_1.getDefaultErrorModel)(),
    };
    main_1.testDb.datas.push(objReturn.data);
    res.send(objReturn);
    return;
});
dataApi.post("/update", (req, res) => {
    var _a;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.name) === undefined) {
        res.send((0, genUtil_1.makeError)("NoParameterException : name"));
        return;
    }
    const objReturn = {
        success: true,
        data: {},
        error: (0, genUtil_1.getDefaultErrorModel)(),
    };
    const datas = main_1.testDb.datas;
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id === req.body.id) {
            datas[i].name = req.body.name;
        }
    }
    //testDb.datas.push(objReturn.data);
    res.send(objReturn);
    main_1.testDb.datas = datas;
    return;
});
dataApi.post("/delete", (req, res) => {
    var _a;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.id) === undefined) {
        res.send((0, genUtil_1.makeError)("NoParameterException : id"));
        return;
    }
    const objReturn = {
        success: true,
        data: {},
        error: (0, genUtil_1.getDefaultErrorModel)(),
    };
    let datas = main_1.testDb.datas;
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id === req.body.id[0]) {
            datas.splice(i, 1);
            break;
        }
    }
    res.send(objReturn);
    main_1.testDb.datas = datas;
    return;
});
exports.default = dataApi;
//# sourceMappingURL=api.js.map