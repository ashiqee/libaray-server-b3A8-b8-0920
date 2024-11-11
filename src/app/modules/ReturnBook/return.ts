import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { Request, Response } from "express"
import prisma from "../../../shared/prisma"


const returnBookedService = async(borrowId:string,res:any)=>{

     
    // check book 
    const isExistborrow = await prisma.borrowRecord.findUnique({
        where:{borrowId},
        include:{
            Book:true
        }
    });

    if(!isExistborrow){
        return res.status(404).json({ success: false, message: 'Borrow Book not found' });
    }

    // Update borrow record 
    const updatedBorrowRecord = await prisma.borrowRecord.update({
        where: { borrowId },
        data: {
          returnDate: new Date(),
        },
      })

    // update bookavailabele 
    await prisma.book.update({
        where:{bookId: isExistborrow.bookId},
        data:{
            availableCopies: isExistborrow.Book.availableCopies + 1,
        },
    });

 




    return updatedBorrowRecord;




}




const returnBook = catchAsync( async( req: Request,res: Response)=>{

    const {borrowId} = req.body;

    
    const result =  await returnBookedService(borrowId,res)
    
        sendResponse(res,{
            success:true,
            status: httpStatus.OK,
            message:"Return book successfully",
           
        })
    } )



    export default returnBook;