import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Admin from "./dashboards/Admin";
import Client from "./dashboards/Client";
import ThemeContext from "./ThemeContext";
import "./App.css";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ALU from "./components/MyLearning/COA/ALU";
import MyLectures from "./pages/Admin/MyLectures";
import Contact from "./pages/Contact";
import GATE from "./pages/GATE";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-theme", theme === "light");
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        {/* <nav> 
           <Link to="/">Home</Link> 
            | <Link to="/admin">Admin</Link> 
         </nav> */}
        <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/lectures" element={<MyLectures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gate" element={<GATE />} />

        <Route path="/alu" element={<ALU />} />
      </Routes>
      </BrowserRouter>
      <button className="theme-toggle-floating" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
      </button>
    </ThemeContext.Provider>
  );
}
