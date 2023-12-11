"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCopy = void 0;
const lodash_1 = require("lodash");
function deepCopy(data) {
    return (0, lodash_1.cloneDeep)(data);
}
exports.deepCopy = deepCopy;
//# sourceMappingURL=dataUtil.js.map