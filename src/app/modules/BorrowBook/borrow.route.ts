import express from "express";
import createBorrowBook from "./borrow";





const router = express.Router();



router.post('/',createBorrowBook)




export const BorrowRoutes = router;