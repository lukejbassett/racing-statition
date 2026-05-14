import type { ApiWrapper } from "../types/api";
import type { RaceTable } from "../types/race";
import instance from "./axios";

export async function getRaces(season: string) {
  try {
    const res = await instance.get<ApiWrapper<RaceTable>>(
      `${season}/races.json`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

export async function getRaceResults(season: string, round: string) {
  try {
    const res = await instance.get<ApiWrapper<RaceTable>>(
      `${season}/${round}/results.json`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}

export async function getQualifyingResults(season: string, round: string) {
  try {
    const res = await instance.get<ApiWrapper<RaceTable>>(
      `${season}/${round}/qualifying.json`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error
  }
}
