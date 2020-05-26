import mongoose, { Document, Model, model, Types, Schema, Query } from "mongoose";


export interface IUser extends Document {
    firstName: string;
    lastName?: string;
    email: string;
    password: string;    
}

const UserSchema = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true    
  },
  password: {
    type: String,
    required: true
  } 
});

export const UserModel:Model = mongoose.model<IUser>('User', UserSchema);