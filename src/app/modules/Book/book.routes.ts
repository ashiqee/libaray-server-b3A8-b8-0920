import express from "express";



const router = express.Router();



router.get('/',(req,res)=>{
    res.send({
        message:"get Booked routes"
    })
})


export const BookRoutes = router;