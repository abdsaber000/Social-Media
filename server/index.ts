import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import {connectDB} from './db/connect';
import usersRoute from './routes/users';
import authRoute from './routes/auth';
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;


// middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users/' , usersRoute);
app.use('/api/auth/' , authRoute);

const start = async ()=>{
    try{

        await connectDB(process.env.MONGO_URL as string);
        
        app.listen(3000 , ()=>{
            console.log(`server is listening at port ${port}`);
        })
    }catch(error : any){
        console.log(error);
    }

}


start();