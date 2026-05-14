import { useQuery } from "@tanstack/react-query";
import { getRaceResults } from "../api/race";

export function useRaceResults(season: string, round: string) {
  return useQuery({
    queryKey: ["raceResults", season, round],
    queryFn: () => getRaceResults(season, round),
    enabled: !!season && !!round,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
