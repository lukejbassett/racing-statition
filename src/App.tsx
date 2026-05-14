import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { DriversPage } from "./pages/DriversPage";
import { TeamsPage } from "./pages/TeamsPage";
import { GamesPage } from "./pages/GamesPage";
import { AboutPage } from "./pages/AboutPage";
import { CircuitsPage } from "./pages/CircuitsPage";
import { Layout } from "./components/Layout";

export function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />}></Route>
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
