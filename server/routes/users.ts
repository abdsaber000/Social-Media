import { Router } from "express";
import {updateUser , deleteUser , getUser} from '../controllers/users';
const router = Router();


router.patch('/:id' , updateUser);
router.delete('/:id' , deleteUser);
router.get('/:id' , getUser);

export default router;