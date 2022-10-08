"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = exports.getEntries = void 0;
const productos_json_1 = __importDefault(require("../productos.json"));
const getEntries = () => productos_json_1.default;
exports.getEntries = getEntries;
class IndexController {
    list(req, res) {
        res.json((0, exports.getEntries)());
        console.log((0, exports.getEntries)());
    }
}
exports.indexController = new IndexController();
