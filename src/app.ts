import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());

app.use(express.json());

app.get('/',(req:Request,res:Response)=>{
    res.send({
        Message: "Liabary server are runing.."
    })
})

app.use('/api/',router)


app.use(globalErrorHandler)


export default app;
