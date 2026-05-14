import type { Constructor } from "./constructor";
import type { Driver } from "./driver";

export interface DriverStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructor: Constructor[];
}

export interface ConstructorStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

export interface StandingsList {
  season: string;
  round: string;
  DriverStandings?: DriverStandings[];
  ConstructorStandings?: ConstructorStandings[];
}

export interface StandingsTable {
  StandingsList: StandingsList[];
}
