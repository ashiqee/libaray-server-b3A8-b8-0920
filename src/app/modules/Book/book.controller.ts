import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../../shared/sendResponse";
import { bookServices } from "./book.service";


const createBook = catchAsync( async( req: Request,res: Response)=>{

    const result =  await bookServices.createBook(req.body)


    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:"Book created succesfully",
        data:result
    })
} )