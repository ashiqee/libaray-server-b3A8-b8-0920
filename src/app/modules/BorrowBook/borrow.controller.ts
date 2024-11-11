import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { NextFunction, Request, Response } from "express";
import { BorrowServices } from "./borrow.service";




const createBorrowBook = catchAsync( async( req: Request,res: Response)=>{

    const {bookId,memberId} = req.body;

    
    const result =  await BorrowServices.borrowBookedService(bookId,memberId,res)
    
        sendResponse(res,{
            success:true,
            status: StatusCodes.OK,
            message:"Book borrowed successfully",
            data: result
        })
    } )



const getOverdueBorrowsFromDB = catchAsync( async( req: Request,res: Response,next:NextFunction)=>{

    const {bookId,memberId} = req.body;

    
    const result =  await BorrowServices.getOverdueBorrows(next)
    
        sendResponse(res,{
            success:true,
            status: StatusCodes.OK,
            message: result?.msg!,
            data: result?.overdueBorrows || []
        })
    } )





    export const BorrowControllers = { 
        createBorrowBook ,
        getOverdueBorrowsFromDB 
       
       }