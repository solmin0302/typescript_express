import { IUser } from "../interfaces/IUser";
import * as mongoose from "mongoose";

const User = new mongoose.Schema({
  nickname: {
    type: String,
    required: [true, "Please enter nickname"],
  },
  userId: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model<IUser & mongoose.Document>("User", User);
