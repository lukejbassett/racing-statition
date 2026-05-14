import { useQuery } from "@tanstack/react-query";
import { getQualifyingResults } from "../api/race";

export function useQualifyingResults(season: string, round: string) {
  return useQuery({
    queryKey: ["qualifyingResults", season, round],
    queryFn: () => getQualifyingResults(season, round),
    enabled: !!season && !!round,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
