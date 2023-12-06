import { Router } from "express";
import {updateUser , deleteUser , getUser , follow , unfollow} from '../controllers/users';
const router = Router();


router.patch('/:id' , updateUser);
router.delete('/:id' , deleteUser);
router.get('/:id' , getUser);
router.patch('/follow/:id' , follow);
router.patch('/unfollow/:id' , unfollow);
export default router;