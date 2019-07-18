import mongoose, { Schema } from 'mongoose';

const userSchema = Schema(
  {
    gender: String,
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
