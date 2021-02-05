import { NextApiRequest, NextApiResponse } from "next"
import User from "../../../models/User"
import { DBConnect } from "../../../utils/DBConnect"
import { RequestType } from "../../../utils/const"
import { userData } from "../../_app"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req
  await DBConnect()
  if (method == RequestType.PUT) {
    const reqUser: userData = JSON.parse(req.body)
    const user = new User(reqUser)
    await User.create(user)
    res.status(200).json({ userID: user._id })
  }
  if (method == RequestType.GET) {
    const users = await User.find({})
    res.status(200).json(users)
  }
  res.end()
}
