"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../modules/Book/book.routes");
const member_route_1 = require("../modules/Member/member.route");
const borrow_route_1 = require("../modules/BorrowBook/borrow.route");
const return_route_1 = require("../modules/ReturnBook/return.route");
const router = express_1.default.Router();
const allRoutes = [
    {
        path: "/books",
        route: book_routes_1.BookRoutes
    },
    {
        path: "/members",
        route: member_route_1.MemberRoutes
    },
    {
        path: "/borrow",
        route: borrow_route_1.BorrowRoutes
    },
    {
        path: "/return",
        route: return_route_1.ReturnRoutes
    },
];
allRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
