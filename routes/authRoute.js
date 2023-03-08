import express from 'express';
import {registerController,loginController,testController} from "../controllers/authController.js"


import { isAdmin,requiresSignIn } from '../middleweres/authMiddleware.js';
//router object

const router =express.Router();

//routing
//Register||method Post
router.post('/register',registerController);

//login router || it is the Post

router.post("/login", loginController)
 

//test Routes

router.post("/test",requiresSignIn,isAdmin,testController)
export default router;