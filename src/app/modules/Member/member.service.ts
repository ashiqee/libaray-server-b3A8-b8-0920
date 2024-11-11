import { Request } from "express";
import prisma from "../../../shared/prisma";


const createMember = async (req:Request)=>{

    const isNotExitsMember = await prisma.member.findUnique({
        where:{
            email: req.body.email
        }
    })

    if(isNotExitsMember){
         throw new Error("Member is already exits")
    }

    const memberData = await prisma.member.create({
        data: req.body
    })

    return memberData;
    
}


const getAllMembers = async ()=>{
    const allMembers = await prisma.member.findMany()

    return allMembers;
}


const getAMember =  async(req:Request)=>{
    const bookResult =  await prisma.member.findUniqueOrThrow({
        where: {
            memberId: req.params.memberId
        }
    })

    return bookResult;
    
}

// update 
const updateMember =  async(req:Request)=>{
    const bookupdateResult =  await prisma.member.update({
        where: {
            memberId: req.params.memberId
        },
            data: req.body
        
    })

    return bookupdateResult;
    
}

// delete 
const deleteMember =  async(req:Request)=>{

    try{
        const isNotExitsMember = await prisma.member.findUnique({
            where:{
                memberId: req.params.memberId
            }
        })
    
        if(!isNotExitsMember){
             throw new Error("Member not found")
        }
    
        const bookdeletedResult =  await prisma.member.delete({
            where: {
                memberId: req.params.memberId
            },
               
            
        })
    
        return bookdeletedResult;
    }catch(err){
        throw new Error("An error occurred while deleting the member")
    }
    
}


export const memberServices = {
    createMember,
    getAllMembers,
    getAMember,
    updateMember,
    deleteMember
}