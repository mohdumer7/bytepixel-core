

require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import ejs from "ejs";
import path from "path";
import sendMail from "../utils/sendMail";
import demoSessionModel from "../models/demoSession.model.";

export const bookDemo = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, startDateTime, endDateTime, email,phoneNumber } = req.body;

      const demo = await demoSessionModel.create({
        name, startDateTime, endDateTime, email,phoneNumber
      });

      const data = {name, startDateTime, endDateTime, email,phoneNumber }
      const html = await ejs.renderFile(
        path.join(__dirname, "../mails/demoClass.ejs"),
        data
      );

      const techMail = await ejs.renderFile(
          path.join(__dirname, "../mails/demoClassTech.ejs"),
          data
      );

      try {
        await sendMail({
          email,
          subject: "Your demo session",
          template: "demoClass.ejs",
          data,
        });

        await sendMail({
          email:"picopixeltech24@gmail.com",
          subject: "Demo session",
          template: "demoClassTech.ejs",
          data,
        });

        res.status(201).json({
          success: true,
          message: `Please check your email: ${email} to demo class`,
        });
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
      }
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
