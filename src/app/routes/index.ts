import express from "express";
import { BookRoutes } from "../modules/Book/book.routes";
import { MemberRoutes } from "../modules/Member/member.route";


const router = express.Router();


const allRoutes = [
    {
        path:"/books",
        route: BookRoutes
    },
    {
        path:"/members",
        route: MemberRoutes
    },
];

allRoutes.forEach( route => router.use(route.path,route.route))


export default router;