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
exports.bookControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const book_service_1 = require("./book.service");
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.createBook(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book created succesfully",
        data: result
    });
}));
const getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.getAllBooks();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Get all Book retrived succesfully",
        data: result
    });
}));
const getABook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.getABook(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Get A Book retrived succesfully",
        data: result
    });
}));
// update book data 
const updateBookData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.updateBook(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book updated successfully",
        data: result
    });
}));
// delete book data 
const deleteBookData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookServices.deleteBook(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Book deleted successfully",
        data: result
    });
}));
exports.bookControllers = {
    createBook,
    getAllBooks,
    getABook,
    updateBookData,
    deleteBookData
};
