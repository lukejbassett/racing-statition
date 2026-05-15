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
        {mapData.map((d) => (
          <li key={d.Driver.driverId}>
            <p>
              {d.Driver.givenName} {d.Driver.familyName}
            </p>
            <p>{d.Constructors[0].name}</p>
            <p>{d.points}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
