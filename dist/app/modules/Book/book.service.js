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
exports.bookServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = yield prisma_1.default.book.create({
        data: req.body
    });
    return bookData;
});
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBooks = yield prisma_1.default.book.findMany();
    return allBooks;
});
const getABook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const bookResult = yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId: req.params.bookId
        }
    });
    return bookResult;
});
// update 
const updateBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const bookupdateResult = yield prisma_1.default.book.update({
        where: {
            bookId: req.params.bookId
        },
        data: req.body
    });
    return bookupdateResult;
});
// delete 
const deleteBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isNotExitsBook = yield prisma_1.default.book.findUnique({
            where: {
                bookId: req.params.bookId
            }
        });
        if (!isNotExitsBook) {
            throw new Error("Book not found");
        }
        const bookdeletedResult = yield prisma_1.default.book.delete({
            where: {
                bookId: req.params.bookId
            },
        });
        return bookdeletedResult;
    }
    catch (err) {
        throw new Error("An error occurred while deleting the book");
    }
});
exports.bookServices = {
    createBook,
    getAllBooks,
    getABook,
    updateBook,
    deleteBook
};
