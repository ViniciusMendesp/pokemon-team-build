import { prismaClient } from "@/services/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const teams = await prismaClient.team.findMany({
    include: {
      pokemons: true,
    },
  });

  res.status(200).json(teams.reverse());
}
