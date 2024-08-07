require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";


const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IDemo extends Document {
    name:string
    startDateTime:string
    endDateTime:string
    email: string;
    phoneNumber:string;
}

const demoSchema: Schema<IDemo> = new mongoose.Schema(
  {
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

  },
  { timestamps: true }
);

const demoModel: Model<IDemo> = mongoose.model("DemoSessions", demoSchema);

export default demoModel;
