import { ConstructorStandings } from "../components/ConstructorStandings";
import { DriverStandings } from "../components/DriverStandings";
import type { seasonProps } from "../components/SeasonDropdown";

export function Homepage({ season }: seasonProps) {
  return (
    <div className="grid grid-cols-3 gap-6 h-screen p-4">
      <div className="col-span-1">
        <DriverStandings season={season} />
      </div>
      <div className="col-span-1">
        <ConstructorStandings season={season}/>
      </div>
      <div className="flex flex-col gap-6">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
