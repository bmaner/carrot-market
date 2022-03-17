import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
      // ...(phone && { phone: +phone }),
      // ...(email && { email: email }),
      // ...(phone ? { phone: +phone } : {}), 효과는 위와 같음
      // ...(email ? { email: email } : {}), 효과는 위와 같음
    },
    create: {
      name: "Anonymous",
      ...payload,
      // ...(phone && { phone: +phone }),
      // ...(email && { email: email }),
    },
    update: {},
  });
  console.log(user);
  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email: email,
  //     },
  //   });
  //   if (user) console.log("찾았다");
  //   if (!user) {
  //     console.log("못찾겠음");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         email: email,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }
  // if (phone) {
  //   user = await client.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   });
  //   if (user) console.log("찾았다");
  //   if (!user) {
  //     console.log("못찾겠음");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         phone: +phone,
  //       },
  //     });
  //   }
  //   console.log(user);
  // }
  return res.status(200).end();
}

export default withHandler("POST", handler);
