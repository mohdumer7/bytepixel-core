"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookDemo = void 0;
require("dotenv").config();
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const catchAsyncErrors_1 = require("../middleware/catchAsyncErrors");
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const sendMail_1 = __importDefault(require("../utils/sendMail"));
const demoSession_model_1 = __importDefault(require("../models/demoSession.model."));
exports.bookDemo = (0, catchAsyncErrors_1.CatchAsyncError)(async (req, res, next) => {
    try {
        const { name, startDateTime, endDateTime, email, phoneNumber } = req.body;
        const demo = await demoSession_model_1.default.create({
            name, startDateTime, endDateTime, email, phoneNumber
        });
        const data = { name, startDateTime, endDateTime, email, phoneNumber };
        const html = await ejs_1.default.renderFile(path_1.default.join(__dirname, "../mails/demoClass.ejs"), data);
        const techMail = await ejs_1.default.renderFile(path_1.default.join(__dirname, "../mails/demoClassTech.ejs"), data);
        try {
            await (0, sendMail_1.default)({
                email,
                subject: "Your demo session",
                template: "demoClass.ejs",
                data,
            });
            await (0, sendMail_1.default)({
                email: "picopixeltech24@gmail.com",
                subject: "Demo session",
                template: "demoClassTech.ejs",
                data,
            });
            res.status(201).json({
                success: true,
                message: `Please check your email: ${email} to demo class`,
            });
        }
        catch (error) {
            return next(new ErrorHandler_1.default(error.message, 400));
        }
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 400));
    }
});
