import express from "express";
import { bookDemo} from "../controllers/bookDemo.controller";
const bookDemoRouter = express.Router();

bookDemoRouter.post("/bookDemo", bookDemo);

export default bookDemoRouter;