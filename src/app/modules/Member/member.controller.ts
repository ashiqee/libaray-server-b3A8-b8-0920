
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../../shared/sendResponse";
import { memberServices } from "./member.service";



const createMember = catchAsync( async( req: Request,res: Response)=>{
    
const result =  await memberServices.createMember(req)

    sendResponse(res,{
        success:true,
        status: StatusCodes.OK,
        message:"Member created succesfully",
        data: result
    })
} )


const getAllMembers = catchAsync(async(req:Request,res:Response)=>{
    const result = await memberServices.getAllMembers()
    sendResponse(res,{
        success:true,
        status: StatusCodes.OK,
        message:"Get all Member retrived succesfully",
        data: result
    })
})



const getAMember = catchAsync(async(req:Request,res:Response)=>{
    const result = await memberServices.getAMember(req)
    sendResponse(res,{
        success:true,
        status: StatusCodes.OK,
        message:"Get A Member retrived succesfully",
        data: result
    })
})

// update member data 

const updateMemberData =  catchAsync(async(req:Request,res:Response)=>{
    const result = await memberServices.updateMember(req)
    sendResponse(res,{
        success:true,
        status: StatusCodes.OK,
        message:"Member updated successfully",
        data: result
    })
})

// delete member data 

const deleteMemberData =  catchAsync(async(req:Request,res:Response)=>{
    const result = await memberServices.deleteMember(req)
    sendResponse(res,{
        success:true,
        status: StatusCodes.OK,
        message:"Member deleted successfully",
    
    })
})




export const memberControllers = {
    createMember,
    getAllMembers,
    getAMember,
    updateMemberData,
    deleteMemberData
}