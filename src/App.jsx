import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NorthStar from "./pages/NorthStar/NorthStar";
import GoalsPage from "./pages/GoalsPage/GoalsPage";
import Partners from "./pages/Partners/Partners";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/north-star" element={<NorthStar />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;