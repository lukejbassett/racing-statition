import { useDriverStandings } from "../hooks/useDriverStandings";
import type { seasonProps } from "./SeasonDropdown";

export function DriverStandings({ season }: seasonProps) {
  const { data, isLoading, isError } = useDriverStandings(season);

  if (isLoading) return <p>Loading driver standings...</p>;
  if (isError) return <p>Error</p>;

  const standingsData =
    data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];

  return (
    <div className="bg-dmBg-light border border-dmOutline rounded-2xl overflow-hidden shadow-xl h-full">
      <table className="w-full text-left h-full font-bold">
        <thead className="border-b border-dmOutline">
          <tr className="text-dmText uppercase text-sm tracking-wider">
            <th className="p-2">Pos.</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Pts.</th>
          </tr>
        </thead>
        <tbody>
          {standingsData.map((d, index) => (
            <tr
              key={d.Driver.driverId}
              className={`border-b border-dmOutline transition-colors duration-100 hover:bg-dmHover ${index % 2 === 0 ? "bg-dmBg" : "bg-dmBg-light"}`}
            >
              <td>
                <div className="flex items-center gap-3 pl-2">
                  <span
                    className={`w-7 h-7 flex items-center justify-center rounded-full font-black ${d.position === "1" ? "bg-gold text-black" : d.position === "2" ? "bg-silver text-black" : d.position === "3" ? "bg-bronze text-black" : "bg-dmHover text-white"}`}
                  >
                    {d.position}
                  </span>
                </div>
              </td>
              <td>
                {d.Driver.givenName} {d.Driver.familyName}
              </td>
              <td>{d.Constructors[0].name}</td>
              <td>{d.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
