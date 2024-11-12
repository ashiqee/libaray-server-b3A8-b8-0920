"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const borrow_service_1 = require("./borrow.service");
const createBorrowBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = req.body;
    const result = yield borrow_service_1.BorrowServices.borrowBookedService(bookId, memberId, res);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book borrowed successfully",
        data: result
    });
}));
const getOverdueBorrowsFromDB = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = req.body;
    const result = yield borrow_service_1.BorrowServices.getOverdueBorrows(next);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: result === null || result === void 0 ? void 0 : result.msg,
        data: (result === null || result === void 0 ? void 0 : result.overdueBorrows) || []
    });
}));
exports.BorrowControllers = {
    createBorrowBook,
    getOverdueBorrowsFromDB
};
