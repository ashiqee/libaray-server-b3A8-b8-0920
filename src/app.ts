import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

const app: Application = express();

app.use(cors());



app.get('/',(req:Request,res:Response)=>{
    res.send({
        Message: "Liabary server are runing.."
    })
})

app.use('/api/v1/',router)



export default app;
