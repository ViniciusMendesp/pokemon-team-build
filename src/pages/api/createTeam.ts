import { prismaClient } from "@/services/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { body } = req;
  const { name, pokemons } = body;

  console.log(body);

  const pokeTeam = await prismaClient.team.create({
    data: {
      name: name,
      pokemons: {
        create: pokemons,
      },
    },
    include: {
      pokemons: true,
    },
  });

  return res
    .status(200)
    .json({ message: "Parabens, esse é o seu time", team: pokeTeam });
}
