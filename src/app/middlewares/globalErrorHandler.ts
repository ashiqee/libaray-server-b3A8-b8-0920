import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
   
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err.message || "Something went wrong!",
    })
};

export default globalErrorHandler;