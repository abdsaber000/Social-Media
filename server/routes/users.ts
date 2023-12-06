import { Router } from "express";
import {updateUser , deleteUser} from '../controllers/users';
const router = Router();

router.get('/' , (req , res)=>{
    res.send("hello from users");
})

router.patch('/:id' , updateUser);
router.delete('/:id' , deleteUser);

export default router;