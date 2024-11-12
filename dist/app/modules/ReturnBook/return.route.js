"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRoutes = void 0;
const express_1 = __importDefault(require("express"));
const return_1 = __importDefault(require("./return"));
const router = express_1.default.Router();
router.post('/', return_1.default);
exports.ReturnRoutes = router;
