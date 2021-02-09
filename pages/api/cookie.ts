import { NextApiRequest, NextApiResponse } from "next"
import { RequestType } from "../../utils/const"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { method } = req

  if (method == RequestType.GET) {
    req.headers.cookie
    res.status(200)
  } else {
    res.status(200)
  }
  res.end()
}
