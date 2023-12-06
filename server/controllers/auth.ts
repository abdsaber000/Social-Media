import User from '../models/User';
import bcrypt from "bcrypt";
import {Request , Response} from 'express';


export const register =  async (req : Request, res : Response)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user =  new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword
        });
        await user.save();
        return res.status(200).json(user);
    }catch(error){
        console.log(error);
    }
    return res.status(403).send("error");
}
