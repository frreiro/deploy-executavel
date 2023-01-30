"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send(os_1.default.cpus());
});
const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
