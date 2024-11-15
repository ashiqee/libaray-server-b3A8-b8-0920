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
exports.memberControllers = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const member_service_1 = require("./member.service");
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.createMember(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Member created succesfully",
        data: result
    });
}));
const getAllMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.getAllMembers();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Get all Member retrived succesfully",
        data: result
    });
}));
const getAMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.getAMember(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Get A Member retrived succesfully",
        data: result
    });
}));
// update member data 
const updateMemberData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.updateMember(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Member updated successfully",
        data: result
    });
}));
// delete member data 
const deleteMemberData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberServices.deleteMember(req);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Member deleted successfully",
    });
}));
exports.memberControllers = {
    createMember,
    getAllMembers,
    getAMember,
    updateMemberData,
    deleteMemberData
};
