import { Router } from "express";
import {activityController } from "../controller/activityController.js";

const activityRouter=Router();

activityRouter.get('/',activityController);

export default activityRouter;