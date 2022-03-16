import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  //   await client.user.create({
  //     data: {
  //       email: "hiphop9308@naver.com",
  //       name: "paul",
  //     },
  //   });
  //   res.json({
  //     ok: true,
  //   });
  console.log("req.body?", req.body.email);
  res.status(200).end();
}
