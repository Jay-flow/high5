import { NextApiRequest, NextApiResponse } from "next"
import User from "../../models/User"
import DBConnect from "../../utils/dbConnect"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req
  console.log(method)
  await DBConnect()
  // User.find({ ip: {req.body}})
  // const user = await User.create({
  //   ip: "192.195.142.31",
  //   device: "Desktop",
  //   os: "MacOS",
  //   userAget: "fuck"
  // })
  // res.status(201).json({ success: true, data: user })
}
