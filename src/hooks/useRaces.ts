import { useQuery } from "@tanstack/react-query";
import { getRaces } from "../api/race";

export function useRaces(season: string) {
  return useQuery({
    queryKey: ["races", season],
    queryFn: () => getRaces(season),
    enabled: !!season,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
