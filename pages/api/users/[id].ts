import { NextApiRequest, NextApiResponse } from "next"
import User from "../../../models/User"
import { DBConnect } from "../../../utils/DBConnect"
import { RequestType } from "../../../utils/const"
import { userData } from "../../_app"
import { update } from "lodash"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query
  const { method } = req
  const path = req.body

  await DBConnect()
  if (method == RequestType.PUT) {
    const user = await User.findById(id)
    const movePath = [...user.get("movePath"), path]
    await user.updateOne({ movePath: movePath })
    res.status(200).json({ userID: "test" })
  }
}
