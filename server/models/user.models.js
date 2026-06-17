import mongoose from "mongoose";
import { timeStamp } from "node:console";
import { type } from "node:os";
const userSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
 credits:{
    type:Number,
    default:100
 }

},{timeStamp:true})

const user=mongoose.model("name",userSchema);

export default user;