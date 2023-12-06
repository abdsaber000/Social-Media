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

export const login = async (req : Request , res : Response) => {
    try{
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(404).json({error : "email or password is missing."});
        }
        const user = await User.findOne({email : email});
        if(!user){
            return res.status(404).json({error : "user not found."});
        }
        let isCorrectPassword = await bcrypt.compare(password,  user.password as string);
        if(!isCorrectPassword){
            return res.status(404).json({error : "passowrd is not correct"});
        }
    }catch(error){
        console.log(error);
    }
    return res.status(200).send("logged successfully");
}