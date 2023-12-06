import { Router } from "express";
import {updateUser} from '../controllers/users';
const router = Router();

router.get('/' , (req , res)=>{
    res.send("hello from users");
})

router.patch('/:id' , updateUser);

export default router;