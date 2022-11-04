import mongoose from 'mongoose'
const { Schema } = mongoose
const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  username: { type: String, default: null },
  phone: { type: Number, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  gender: { type: String }
  // role: { type: mongoose.Schema.Types.ObjectId, ref: "role" },
})
const User = mongoose.model('user', userSchema)
export default User
