import * as mongoose from 'mongoose';
export const AdminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
