import mongoose, { Schema, Document } from 'mongoose';


const userSchema = new Schema(
  {
    username: {
      type: String, 
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    password: {
      type: String, 
      required: true,
      unique: false,
      trim: false,
      minlength: 3,
      
    },
    points: {
      type: Number, 
      default: 0,
    },
  }
);


export interface UserDocument extends Document {
  username: string;
  password: string;
  points: number;
}


const User = mongoose.model<UserDocument>('users', userSchema);
export default User;
