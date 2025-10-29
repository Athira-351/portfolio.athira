import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Admin from "./dashboards/Admin";
import Client from "./dashboards/Client";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ALU from "./components/MyLearning/COA/ALU";
import MyLectures from "./pages/Admin/MyLectures";
import Contact from "./pages/Contact";

export default function App() {
  return (
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
        <Route path="/lectures" element={<MyLectures />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/alu" element={<ALU />} />
      </Routes>
    </BrowserRouter>
  );
}
