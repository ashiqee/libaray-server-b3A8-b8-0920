import express from "express";
import { BorrowControllers } from "./borrow.controller";






const router = express.Router();



router.post('/',BorrowControllers.createBorrowBook)
router.get('/overdue',BorrowControllers.getOverdueBorrowsFromDB)




export const BorrowRoutes = router;