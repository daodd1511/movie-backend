import mongoose from 'mongoose'
const { Schema } = mongoose
const listSchema = new Schema({
  name: { type: String, nullable: false },
  description: { type: String, default: null },
  movies: [Number],
  tvs: [Number]
}, { timestamps: true })
const List = mongoose.model('list', listSchema)
export default List
