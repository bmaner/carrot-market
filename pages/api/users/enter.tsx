import mail from "@sendgrid/mail";
import twilio from "twilio";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

mail.setApiKey(process.env.SENDGRID_API_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  // const user = await client.user.upsert({
  //   where: {
  //     ...user,
  //     // ...(phone && { phone: +phone }),
  //     // ...(email && { email: email }),
  //     // ...(phone ? { phone: +phone } : {}), 효과는 위와 같음
  //     // ...(email ? { email: email } : {}), 효과는 위와 같음
  //   },
  //   create: {
  //     name: "Anonymous",
  //     ...payload,
  //     // ...(phone && { phone: +phone }),
  //     // ...(email && { email: email }),
  //   },
  //   update: {},
  // });
  const token = await client.token.create({
    data: {
      payload: payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
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
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.SERVICE_SID,
    //   to: process.env.PHONE_NUM!,
    //   body: `Your login token is ${payload}`,
    // });
    // console.log(message);
  } else if (email) {
    // const email = await mail.send({
    //   from: "bmanerdaniel@gmail.com",
    //   to: "bmanerdaniel@gmail.com",
    //   subject: "Your Carrot Market Verification Email",
    //   text: `Your login token is ${payload}`,
    //   html: `<strong>Your login token is ${payload}</strong>`,
    // });
    // console.log(email);
  }
  return res.json({ ok: true });
}

export default withHandler("POST", handler);
