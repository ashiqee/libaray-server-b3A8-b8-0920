import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import { StatusCodes } from "http-status-codes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/',(req:Request,res:Response)=>{
    res.send({
        Message: "Library server are runing.."
    })
})

app.use('/api/',router)


app.use(globalErrorHandler)

// not found api 
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        status: StatusCodes.NOT_FOUND,
        message: "API NOT FOUND!",
    })
})


export default app;
