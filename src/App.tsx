import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { DriversPage } from "./pages/DriversPage";
import { TeamsPage } from "./pages/TeamsPage";
import { GamesPage } from "./pages/GamesPage";
import { AboutPage } from "./pages/AboutPage";
import { CircuitsPage } from "./pages/CircuitsPage";
import { Layout } from "./components/Layout";
import { useState } from "react";

export function App() {
  const [season, changeSeason] = useState(new Date().getFullYear().toString());
  return (
    <>
      <Routes>
        <Route element={<Layout season={season} changeSeason={changeSeason} />}>
          <Route path="/" element={<Homepage season={season} />}></Route>
          <Route path="/drivers" element={<DriversPage />}></Route>
          <Route path="/teams" element={<TeamsPage />}></Route>
          <Route path="/races" element={<CircuitsPage />}></Route>
          <Route path="/games" element={<GamesPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}
