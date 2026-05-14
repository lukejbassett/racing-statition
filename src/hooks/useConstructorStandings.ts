import { useQuery } from "@tanstack/react-query";
import { getConstructorStandings } from "../api/standings";

export function useConstructorStandings(season: string) {
  return useQuery({
    queryKey: ["constructorStandings", season],
    queryFn: () => getConstructorStandings(season),
    enabled: !!season,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
