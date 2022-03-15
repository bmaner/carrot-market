import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
    req:NextApiRequest, res:NextApiResponse
) {
    await client.user.create({
        data: {
            email: "hiphop9308@naver.com",
            name: "paul"
        }
    })
    res.json({
        ok:true,
    })
}