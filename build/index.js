"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import router from './adapter/input/controller'
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8020;
app.get('/ping', (_req, res) => {
    console.log('alguin a echo un ping' + new Date().toLocaleDateString());
    res.send('pong');
});
//app.use('/api/automovies', router)
app.listen(PORT, () => {
    console.log(`El puerto esta corrien en el ${PORT}`);
});
