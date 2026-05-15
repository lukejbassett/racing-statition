import { useDriverStandings } from "../hooks/useDriverStandings";

export function DriversPage() {
  const { data, isLoading, error } = useDriverStandings("2025");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const mapData =
    data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];
  return (
    <>
      <ul>
        {mapData?.map((s) => (
          <li key={s.Driver.driverId}>
            <p>
              {s.Driver.givenName} {s.Driver.familyName}
            </p>
            <p>{s.Constructors[0].name}</p>
            <p>{s.points}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
