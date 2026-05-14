import { useQuery } from "@tanstack/react-query";
import { getDriverStandings } from "../api/standings";

export function useDriverStandings(season: string) {
  return useQuery({
    queryKey: ["driverStandings", season],
    queryFn: () => getDriverStandings(season),
    enabled: !!season,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
