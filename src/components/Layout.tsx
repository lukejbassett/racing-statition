import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  const links = [
    { to: "/", icon: "", label: "Home" },
    { to: "/drivers", icon: "", label: "Drivers" },
    { to: "/teams", icon: "", label: "Teams" },
    { to: "/races", icon: "", label: "Races" },
    { to: "/games", icon: "", label: "Games" },
    { to: "/about", icon: "", label: "About" },
  ];
  return (
    <div className="flex h-screen">
      <aside className="w-40 h-screen flex flex-col">
        <span>Racing Statition</span>
        <nav className="flex-1">
          <ul>
            {links.map(({ to, icon, label }) => (
              <li key={to}>
                <NavLink to={to}>
                  {icon} <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
