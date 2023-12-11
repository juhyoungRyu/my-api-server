"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDb = void 0;
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./src/api"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const testDb = { datas: [] };
exports.testDb = testDb;
app.get("/", (req, res) => {
    res.send("Api Server Start");
});
app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
app.use(express_1.default.json());
app.use("/datas", api_1.default);
//# sourceMappingURL=main.js.map