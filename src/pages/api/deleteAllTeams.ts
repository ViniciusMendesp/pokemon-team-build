import { prismaClient } from "@/services/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await prismaClient.team.deleteMany({});

  res.status(200).json({ message: "Todos os times foram deletados" });
}
