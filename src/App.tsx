import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "./pages/projectsPage";
import HeroPage from "./pages/heroPage";
import ExperiencePage from "./pages/experiencePage";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
