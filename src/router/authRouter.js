import { Router } from "express";
import { authLoginController, authSignUpController } from "../controller/authController.js";

const authRouter=Router();

authRouter.post('/signup',authSignUpController);
authRouter.get('/login',authLoginController)

export default authRouter;
