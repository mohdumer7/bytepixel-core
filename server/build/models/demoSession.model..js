"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const demoSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Please enter your phone number"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
    },
    startDateTime: {
        type: String,
        required: [true, "Please enter your name"],
    },
    endDateTime: {
        type: String,
        required: [true, "Please enter your name"],
    },
}, { timestamps: true });
const demoModel = mongoose_1.default.model("DemoSessions", demoSchema);
exports.default = demoModel;
