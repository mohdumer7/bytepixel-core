"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookDemo_controller_1 = require("../controllers/bookDemo.controller");
const bookDemoRouter = express_1.default.Router();
bookDemoRouter.post("/bookDemo", bookDemo_controller_1.bookDemo);
exports.default = bookDemoRouter;
