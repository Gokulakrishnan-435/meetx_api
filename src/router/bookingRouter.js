import { Router } from "express";
import {bookingController ,getbookingController } from "../controller/bookingController.js";
import {verifyToken} from '../middleware/bookingMiddleware.js'

const bookingRouter=Router();

bookingRouter.post('/',verifyToken,bookingController);
bookingRouter.get('/',verifyToken,getbookingController);

export default bookingRouter;