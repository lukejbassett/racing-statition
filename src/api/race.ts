import type { RaceResponse } from "../types/race";
import instance from "./axios";

export async function getRaceResults(season: string, round: string) {
  try {
    const res = await instance.get<RaceResponse>(
      `${season}/${round}/results.json`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
