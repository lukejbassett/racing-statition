import { useConstructorStandings } from "../hooks/useConstructorStandings";
import type { seasonProps } from "./SeasonDropdown";

export function ConstructorStandings({ season }: seasonProps) {
  const { data, isLoading, isError } = useConstructorStandings(season);

  if (isLoading) return <p>Loading constructor standings...</p>;
  if (isError) return <p>Error</p>;

  const standingsData =
    data?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings ||
    [];

  return (
    <div className="bg-dmBg-light border border-dmOutline rounded-2xl overflow-hidden shadow-xl h-full">
      <table className="w-full text-left h-full font-bold">
        <thead className="border-b border-dmOutline">
          <tr className="text-dmText uppercase text-sm tracking-wider">
            <th className="p-2">Pos.</th>
            <th>Constructor</th>
            <th>Pts.</th>
          </tr>
        </thead>
        <tbody>
          {standingsData.map((c, index) => (
            <tr
              key={c.Constructor.constructorId}
              className={`border-b border-dmOutline transition-colors duration-100 hover:bg-dmHover ${index % 2 === 0 ? "bg-dmBg" : "bg-dmBg-light"}`}
            >
              <td>
                <div className="flex items-center gap-3 pl-2">
                  <span
                    className={`w-7 h-7 flex items-center justify-center rounded-full font-black ${c.position === "1" ? "bg-gold text-black" : c.position === "2" ? "bg-silver text-black" : c.position === "3" ? "bg-bronze text-black" : "bg-dmHover text-white"}`}
                  >
                    {c.position}
                  </span>
                </div>
              </td>
              <td>{c.Constructor.name}</td>
              <td>{c.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
