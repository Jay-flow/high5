import mongoose from "mongoose"
import { getModel } from "../utils/DBConnect"

const UserSchema = new mongoose.Schema(
  {
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
    },
    movePath: {
      type: Array,
      required: true,
      default: []
    }
  },
  { timestamps: true }
)

export default getModel("users", UserSchema)
