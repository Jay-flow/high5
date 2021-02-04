import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true
  },
  device: {
    type: String,
    required: true
  },
  os: {
    type: String,
    required: true
  },
  userAgent: {
    type: String,
    required: true
  }
})

export default mongoose.model("User", UserSchema)
