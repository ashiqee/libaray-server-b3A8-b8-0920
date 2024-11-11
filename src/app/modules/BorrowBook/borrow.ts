import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { Request, Response } from "express"
import prisma from "../../../shared/prisma"


const borrowBookedService = async(bookId:string,memberId:string,res:any)=>{

     
    // check book 
    const isExistBook = await prisma.book.findUnique({
        where:{bookId}
    });

    if(!isExistBook){
        return res.status(404).json({ success: false, message: 'Book not found' });
    }

    if(isExistBook.availableCopies <=0){

        return res.status(400).json({ success: false, message: 'No copies available for borrowing' });
    }

    // check member 
    const isExistMember = await prisma.member.findUnique({
        where:{memberId}
    })


    if(!isExistMember){
        return res.status(404).json({ success: false, message: 'Member not found' });
    }


    // create borrow record 
    const borrowRecord = await prisma.borrowRecord.create({
        data:{
            bookId,
            memberId,
            borrowDate: new Date(),
        },
        select:{
            borrowId:true,
            bookId:true,
            memberId:true,
            borrowDate:true,

        }
    });

// update bookavailabele 
    await prisma.book.update({
        where:{bookId},
        data:{
            availableCopies: isExistBook.availableCopies - 1,
        },
    });


    return borrowRecord;




}




const createBorrowBook = catchAsync( async( req: Request,res: Response)=>{

    const {bookId,memberId} = req.body;

    
    const result =  await borrowBookedService(bookId,memberId,res)
    
        sendResponse(res,{
            success:true,
            status: httpStatus.OK,
            message:"Book borrowed successfully",
            data: result
        })
    } )



    export default createBorrowBook;