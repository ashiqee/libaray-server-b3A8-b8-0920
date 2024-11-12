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
exports.BorrowServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const borrowBookedService = (bookId, memberId, res) => __awaiter(void 0, void 0, void 0, function* () {
    // check book 
    const isExistBook = yield prisma_1.default.book.findUnique({
        where: { bookId }
    });
    if (!isExistBook) {
        return res.status(404).json({ success: false, message: 'Book not found' });
    }
    if (isExistBook.availableCopies <= 0) {
        return res.status(400).json({ success: false, message: 'No copies available for borrowing' });
    }
    // check member 
    const isExistMember = yield prisma_1.default.member.findUnique({
        where: { memberId }
    });
    if (!isExistMember) {
        return res.status(404).json({ success: false, message: 'Member not found' });
    }
    // create borrow record 
    const borrowRecord = yield prisma_1.default.borrowRecord.create({
        data: {
            bookId,
            memberId,
            borrowDate: new Date(),
        },
        select: {
            borrowId: true,
            bookId: true,
            memberId: true,
            borrowDate: true,
        }
    });
    // update bookavailabele 
    yield prisma_1.default.book.update({
        where: { bookId },
        data: {
            availableCopies: isExistBook.availableCopies - 1,
        },
    });
    return borrowRecord;
});
// overDue Borrows 
const getOverdueBorrows = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const today = new Date();
        const borrows = yield prisma_1.default.borrowRecord.findMany({
            where: {
                returnDate: null,
            },
            select: {
                borrowId: true,
                borrowDate: true,
                Book: {
                    select: {
                        title: true,
                    },
                },
                Member: {
                    select: {
                        name: true
                    }
                },
            }
        });
        const overdueBorrows = borrows.map((borrow) => {
            const dueDate = new Date(borrow.borrowDate);
            dueDate.setDate(dueDate.getDate() + 14);
            if (today > dueDate) {
                const timeDiffernce = (today.getTime() - dueDate.getTime());
                const overdueDays = Math.floor(timeDiffernce / (1000 * 60 * 60 * 24));
                return {
                    borrowId: borrow.borrowId,
                    bookTitle: borrow.Book.title,
                    borrowerName: borrow.Member.name,
                    overdueDays,
                };
            }
            return null;
        }).filter(borrow => borrow !== null);
        if (overdueBorrows.length > 0) {
            return { overdueBorrows,
                msg: "Overdue borrow list fetched"
            };
        }
        else {
            return { msg: "No overdue books" };
        }
    }
    catch (err) {
        next(err);
    }
});
exports.BorrowServices = {
    borrowBookedService,
    getOverdueBorrows
};
