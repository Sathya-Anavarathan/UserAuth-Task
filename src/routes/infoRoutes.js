import express from "express";
import authUser from "../middlewares/authMiddleware.js";
import { getInfo } from "../controllers/infoController.js";





const infoRouter = express.Router();



infoRouter.get('/', authUser,getInfo)












export default infoRouter;