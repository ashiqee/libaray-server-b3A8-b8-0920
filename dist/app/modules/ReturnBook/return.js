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
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const returnBookedService = (borrowId, res) => __awaiter(void 0, void 0, void 0, function* () {
    // check borrow 
    const isExistborrow = yield prisma_1.default.borrowRecord.findUnique({
        where: { borrowId },
        include: {
            Book: true
        }
    });
    if (!isExistborrow) {
        return res.status(404).json({ success: false, message: 'Borrow Book not found' });
    }
    // Update borrow record 
    const updatedBorrowRecord = yield prisma_1.default.borrowRecord.update({
        where: { borrowId },
        data: {
            returnDate: new Date(),
        },
    });
    // update book availabeleCopies 
    yield prisma_1.default.book.update({
        where: { bookId: isExistborrow.bookId },
        data: {
            availableCopies: isExistborrow.Book.availableCopies + 1,
        },
    });
    return updatedBorrowRecord;
});
const returnBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = req.body;
    const result = yield returnBookedService(borrowId, res);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Return book successfully",
    });
}));
exports.default = returnBook;
