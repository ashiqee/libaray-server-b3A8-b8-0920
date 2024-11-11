import express from "express";
import { bookControllers } from "./book.controller";



const router = express.Router();



router.post('/',bookControllers.createBook)
router.get('/',bookControllers.getAllBooks)
router.get('/:bookId',bookControllers.getABook)
router.patch('/:bookId',bookControllers.updateBookData)
router.delete('/:bookId',bookControllers.deleteBookData)


export const BookRoutes = router;