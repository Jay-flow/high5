import { NextApiRequest, NextApiResponse } from "next"
import User from "../../models/User"
import { DBConnect } from "../../utils/DBConnect"
import { RequestType } from "../../utils/const"
import { userData } from "../index"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req
  let statusCode = 200
  if (method == RequestType.PUT) {
    await DBConnect()
    const reqUser: userData = JSON.parse(req.body)
    await User.create(new User(reqUser))
    statusCode = 201
  }
  res.status(statusCode).json({ success: true })
}
