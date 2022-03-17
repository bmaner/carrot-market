import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method !== "POST") {
  //   res.status(401).end();
  // }
  console.log("req.body?", req.body);
  return res.status(200).end();
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

export default withHandler("POST", handler);
