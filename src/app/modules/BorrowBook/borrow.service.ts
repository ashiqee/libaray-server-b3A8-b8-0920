
import { NextFunction, Request, Response } from "express"
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






    // overDue Borrows 
    const getOverdueBorrows  = async( next: NextFunction) =>{
        try{
            const today = new Date();

            const borrows = await prisma.borrowRecord.findMany({
                where:{
                    returnDate:null,
                },
                select:{
                    borrowId:true,
                    borrowDate:true,
                    Book:{
                        select:{
                            title:true,
                        },
                   
                    },
                    Member : {
                        select:{
                            name:true
                        }
                    },
                }
            });

            const overdueBorrows = borrows.map((borrow)=>{
                const dueDate = new Date(borrow.borrowDate);
                dueDate.setDate(dueDate.getDate()+14);

                if(today > dueDate){
                    const overdueDays = Math.floor((today.getTime()- dueDate.getTime()))
                    return {
                        borrowId: borrow.borrowId,
                        bookTitle: borrow.Book.title,
                        borrowerName: borrow.Member.name,
                        overdueDays,
                    };
                }
                return null
            }).filter(borrow => borrow !== null);

            if(overdueBorrows.length >0 ){
                return{overdueBorrows,
                    msg: "Overdue borrow list fetched"
                };
            }else{
               return { msg:"No overdue books"}
            }

        }
        catch(err){
            next(err);
        }
    }


    export const BorrowServices = { 
        borrowBookedService ,
        getOverdueBorrows 
       
       }