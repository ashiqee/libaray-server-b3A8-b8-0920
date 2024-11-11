import express from "express";
import returnBook from "./return";



const router = express.Router();



router.post('/',returnBook)




export const ReturnRoutes = router;