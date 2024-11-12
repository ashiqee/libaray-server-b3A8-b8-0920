"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const http_status_codes_1 = require("http-status-codes");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send({
        Message: "Library server are runing.."
    });
});
app.use('/api/', routes_1.default);
app.use(globalErrorHandler_1.default);
// not found api 
app.use((req, res, next) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        status: http_status_codes_1.StatusCodes.NOT_FOUND,
        message: "API NOT FOUND!",
    });
});
exports.default = app;
