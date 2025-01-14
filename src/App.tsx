import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/projectsPage";
import HeroPage from "./pages/heroPage";
import ExperiencePage from "./pages/experiencePage";
import DesktopHeader from "./components/desktopHeader";
import useWindowWidth from "./util/hooks";

function App() {
  return (
    <div className="App">
      {useWindowWidth() >= 800 && <DesktopHeader />}
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
