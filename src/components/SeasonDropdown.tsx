export type dropdownProps = {
  season: string;
  changeSeason: (season: string) => void;
};

export type seasonProps = {
  season: string;
};

export function SeasonDropdown({ season, changeSeason }: dropdownProps) {
  const current = new Date().getFullYear();
  const start = 1950;

  const years = Array.from(
    { length: current - start + 1 },
    (_, i) => current - i,
  );

  return (
    <div>
      {" "}
      <select
        name="season"
        value={season}
        onChange={(e) => changeSeason(e.target.value)}
        className="bg-dmBg, border border-dmOutline text-dmText font-bold rounded-xl px-2 py-2 shadow-lg transition-all duration-200 hover:bg-dmHover cursor-pointer"
      >
        {" "}
        {years.map((y) => (
          <option key={y} value={y} className="bg-dmBg text-dmText">
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}
