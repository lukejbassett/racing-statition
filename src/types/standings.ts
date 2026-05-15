import type { Constructor } from "./constructor";
import type { Driver } from "./driver";

export interface DriverStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface DriverStandingsResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    StandingsTable: {
      season: string;
      round?: string;
      StandingsLists: {
        season: string;
        round: string;
        DriverStandings: DriverStandings[];
      }[];
    };
  };
}

export interface ConstructorStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

export interface ConstructorStandingsResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    StandingsTable: {
      season: string;
      round?: string;
      StandingsLists: {
        season: string;
        round: string;
        ConstructorStandings: ConstructorStandings[];
      }[];
    };
  };
}
