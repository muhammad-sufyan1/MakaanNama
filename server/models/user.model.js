import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar:{
    type: String,
    default: "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_640.png"
  },
}, {timeStamp: true});

//here we start creating models

const User = mongoose.model('User', userSchema);

export default User;
