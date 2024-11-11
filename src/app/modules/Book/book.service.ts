import { Request } from "express";
import prisma from "../../../shared/prisma";


const createBook = async (req:Request)=>{
    const bookData = await prisma.book.create({
        data: req.body
    })

    return bookData;
    
}


const getAllBooks = async ()=>{
    const allBooks = await prisma.book.findMany()

    return allBooks;
}


const getABook =  async(req:Request)=>{
    const bookResult =  await prisma.book.findUniqueOrThrow({
        where: {
            bookId: req.params.bookId
        }
    })

    return bookResult;
    
}

// update 
const updateBook =  async(req:Request)=>{
    const bookupdateResult =  await prisma.book.update({
        where: {
            bookId: req.params.bookId
        },
            data: req.body
        
    })

    return bookupdateResult;
    
}

// delete 
const deleteBook =  async(req:Request)=>{

    try{
        const isNotExitsBook = await prisma.book.findUnique({
            where:{
                bookId: req.params.bookId
            }
        })
    
        if(!isNotExitsBook){
             throw new Error("Book not found")
        }
    
        const bookdeletedResult =  await prisma.book.delete({
            where: {
                bookId: req.params.bookId
            },
               
            
        })
    
        return bookdeletedResult;
    }catch(err){
        throw new Error("An error occurred while deleting the book")
    }
    
}


export const bookServices = {
    createBook,
    getAllBooks,
    getABook,
    updateBook,
    deleteBook
}