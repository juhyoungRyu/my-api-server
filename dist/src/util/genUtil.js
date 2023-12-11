"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeError = exports.getDefaultErrorModel = exports.getUuid = void 0;
const uuid_1 = require("uuid");
function getUuid() {
    const originUuid = (0, uuid_1.v4)();
    const uuid = originUuid.replace(/-/g, "");
    return uuid;
}
exports.getUuid = getUuid;
function getDefaultErrorModel() {
    return {
        msg: "",
    };
}
exports.getDefaultErrorModel = getDefaultErrorModel;
function makeError(msg) {
    return {
        success: false,
        data: [],
        error: {
            msg,
        },
    };
}
exports.makeError = makeError;
//# sourceMappingURL=genUtil.js.map