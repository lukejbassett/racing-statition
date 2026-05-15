import type {
  ConstructorStandingsResponse,
  DriverStandingsResponse,
} from "../types/standings";
import instance from "./axios";

export async function getDriverStandings(season: string) {
  try {
    const res = await instance.get<DriverStandingsResponse>(
      `${season}/driverStandings.json`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getConstructorStandings(season: string) {
  try {
    const res = await instance.get<ConstructorStandingsResponse>(
      `${season}/constructorStandings.json`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
