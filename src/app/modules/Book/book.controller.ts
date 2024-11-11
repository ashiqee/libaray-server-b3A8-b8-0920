import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../../shared/sendResponse";
import { bookServices } from "./book.service";


const createBook = catchAsync( async( req: Request,res: Response)=>{
    
const result =  await bookServices.createBook(req)

    sendResponse(res,{
        success:true,
        status: httpStatus.OK,
        message:"Book created succesfully",
        data: result
    })
} )


const getAllBooks = catchAsync(async(req:Request,res:Response)=>{
    const result = await bookServices.getAllBooks()
    sendResponse(res,{
        success:true,
        status: httpStatus.OK,
        message:"Get all Book retrived succesfully",
        data: result
    })
})



const getABook = catchAsync(async(req:Request,res:Response)=>{
    const result = await bookServices.getABook(req)
    sendResponse(res,{
        success:true,
        status: httpStatus.OK,
        message:"Get A Book retrived succesfully",
        data: result
    })
})

// update book data 

const updateBookData =  catchAsync(async(req:Request,res:Response)=>{
    const result = await bookServices.updateBook(req)
    sendResponse(res,{
        success:true,
        status: httpStatus.OK,
        message:"Book updated successfully",
        data: result
    })
})

// delete book data 

const deleteBookData =  catchAsync(async(req:Request,res:Response)=>{
    const result = await bookServices.deleteBook(req)
    sendResponse(res,{
        success:true,
        status: httpStatus.OK,
        message:"Book deleted successfully",
        data: result
    })
})

export const bookControllers = {
    createBook,
    getAllBooks,
    getABook,
    updateBookData,
    deleteBookData
}