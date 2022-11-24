import mongoose from 'mongoose'
const { Schema } = mongoose

const listSchema = new Schema({
  name: { type: String, nullable: false },
  description: { type: String, default: null },
  movies: [Number],
  tvShows: [Number]
}, { timestamps: true })

const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  username: { type: String, nullable: false, unique: true },
  phone: { type: Number, default: null },
  email: { type: String, unique: true },
  password: { type: String, nullable: false },
  gender: { type: String },
  lists: [listSchema]
  // role: { type: mongoose.Schema.Types.ObjectId, ref: "role" },
})
const User = mongoose.model('user', userSchema)
export default User
