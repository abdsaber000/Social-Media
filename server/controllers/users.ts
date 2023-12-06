import User from '../models/User';
import bcrypt from "bcrypt";
import {Request , Response} from 'express';


const updatePassword = async (req : Request , res : Response) => {
    try{
        const newPassword = req.body.password;
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(newPassword , salt);
    }catch(error){
        console.log(error);
        return false;
    }
    return true;
}

export const updateUser = async (req : Request , res : Response) => {
    if(!req.body.userId){
        return res.status(403).json({error : "user Id is not provided."});
    }

    const userId = req.body.userId;
    
    if(userId != req.params.id && !req.body.isAdmin){
        console.log(userId);
        console.log(req.params.id);
        return res.status(403).json({error : "you can't update another user."});
    }

    if(req.body.password){
        if(!updatePassword(req , res)){
            return res.status(500).json({error : "can't update password."});
        }
    }


    try{
        const user = await User.findByIdAndUpdate(userId, {
            $set : req.body
        });
    }catch(error){
        return res.status(500).json(error);
    }
    return res.status(200).send("Account is updated successfully.");
}

export const deleteUser = async(req : Request , res : Response) =>{
    if(!req.body.userId){
        return res.status(403).json({error : "user Id is not provided."});
    }

    const userId = req.body.userId;
    
    if(userId != req.params.id && !req.body.isAdmin){
        console.log(userId);
        console.log(req.params.id);
        return res.status(403).json({error : "you can't delete another user."});
    }


    try{
        const user = await User.findByIdAndDelete(userId);
    }catch(error){
        return res.status(500).json(error);
    }
    return res.status(200).send("Account is deleted successfully.");
}

export const getUser = async(req : Request , res : Response) =>{
    try{
        const userId = req.params.id;
        const user = await User.findOne({_id : userId});
        if(!user){
            return res.status(403).send("User is not found.");
        }
        const {password ,createdAt ,...other} = user.toObject();
        return res.status(200).json(other);
    }catch(error){
        res.status(500).json(error);
    }
}
