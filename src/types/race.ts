import type { Circuit } from "./circuit";
import type { Constructor } from "./constructor";
import type { Driver } from "./driver";

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
}

export interface RaceResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  FastestLap?: {
    rank: string;
    lap: string;
    Time: {
      time?: string;
    };
    AverageSpeed: {
      units: string;
      speed: string;
    };
  };
}

export interface RaceResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      round?: string;
      Races: Race[];
    };
  };
}

export interface QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1?: string;
  Q2?: string;
  Q3?: string;
}
