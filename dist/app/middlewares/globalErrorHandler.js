"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err.message || "Something went wrong!",
    });
};
exports.default = globalErrorHandler;
