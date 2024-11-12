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
exports.memberServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createMember = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const isNotExitsMember = yield prisma_1.default.member.findUnique({
        where: {
            email: req.body.email
        }
    });
    if (isNotExitsMember) {
        throw new Error("Member is already exits");
    }
    const memberData = yield prisma_1.default.member.create({
        data: req.body
    });
    return memberData;
});
const getAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allMembers = yield prisma_1.default.member.findMany();
    return allMembers;
});
const getAMember = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const bookResult = yield prisma_1.default.member.findUniqueOrThrow({
        where: {
            memberId: req.params.memberId
        }
    });
    return bookResult;
});
// update 
const updateMember = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const bookupdateResult = yield prisma_1.default.member.update({
        where: {
            memberId: req.params.memberId
        },
        data: req.body
    });
    return bookupdateResult;
});
// delete 
const deleteMember = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isNotExitsMember = yield prisma_1.default.member.findUnique({
            where: {
                memberId: req.params.memberId
            }
        });
        if (!isNotExitsMember) {
            throw new Error("Member not found");
        }
        const bookdeletedResult = yield prisma_1.default.member.delete({
            where: {
                memberId: req.params.memberId
            },
        });
        return bookdeletedResult;
    }
    catch (err) {
        throw new Error("An error occurred while deleting the member");
    }
});
exports.memberServices = {
    createMember,
    getAllMembers,
    getAMember,
    updateMember,
    deleteMember
};
