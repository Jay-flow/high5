import { NextApiRequest, NextApiResponse } from "next"
import User from "../../../models/User"
import { DBConnect } from "../../../utils/DBConnect"
import { RequestType } from "../../../utils/const"
import { getCurrentDate } from "../../../utils/DateTime"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query
  const { method } = req
  const path = req.body

  await DBConnect()
  if (method == RequestType.PUT) {
    const user = await User.findById(id)
    if (user != null) {
      const movePath = [...user.get("movePath"), path]
      await user.updateOne({ movePath: movePath, updatedAt: getCurrentDate() })
      res.status(200).json({ isExistUserDataInDB: true })
    } else {
      res.status(200).json({ isExistUserDataInDB: false })
    }
  } else {
    res.status(200)
  }
  res.end()
}
