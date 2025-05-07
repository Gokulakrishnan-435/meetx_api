import express from "express";
import authRouter from "./authRouter.js";
import activityRouter from "./activityRouter.js";
import bookingRouter from "./bookingRouter.js";

const app=express();
app.disable("x-powered-by");

app.use('/auth',authRouter);
app.use('/activity',activityRouter);
app.use('/booking',bookingRouter);

export default app;