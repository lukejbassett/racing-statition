import { NavLink, Outlet } from "react-router-dom";
import { SeasonDropdown, type dropdownProps } from "./SeasonDropdown";

export function Layout({ season, changeSeason }: dropdownProps) {
  const links = [
    { to: "/", icon: "", label: "Home" },
    { to: "/drivers", icon: "", label: "Drivers" },
    { to: "/teams", icon: "", label: "Teams" },
    { to: "/races", icon: "", label: "Races" },
    { to: "/games", icon: "", label: "Games" },
    { to: "/about", icon: "", label: "About" },
  ];
  return (
    <div className="flex h-screen bg-dmBg">
      <aside className="w-64 flex flex-col bg-dmBg-light border-r border-dmOutline transition-all duration-300">
        <div className="p-6 flex flex-col items-center justify-center gap-3 border-b border-dmOutline">
          <span className="text-xl font-black tracking-tighter uppercase italic">
            Racing <span className="text-accent">Statition</span>
          </span>
          <SeasonDropdown season={season} changeSeason={changeSeason} />
        </div>
        <nav className="flex-1 py-6 px-4 text-lg">
          <ul className="space-y-2">
            {links.map(({ to, icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group ${isActive ? "bg-accent text-white shadow-lg shadow-red-900/20" : "text-dmText hover:bg-dmHover hover:text-white"}`
                  }
                >
                  {icon} <span className="font-medium">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 bg-dmBg/50 border-t border-dmOutline">
          <span className="text-sm text-dmText uppercase tracking-widest font-bold">
            Built by{" "}
            <a href="#" className="text-accent">
              Luke Bassett
            </a>
          </span>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
