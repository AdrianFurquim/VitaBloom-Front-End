import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./assets/components/pages/Home";
import NewProject from "./assets/components/pages/NewProject";
import Company from "./assets/components/pages/Company";
import Contact from "./assets/components/pages/Contact";
import Projects from "./assets/components/pages/Projects";

import Conteiner from "./assets/components/layout/Conteiner";
import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";
import Project from "./assets/components/pages/Project";
import Catalogo from "./assets/components/pages/Catalogo";
import ProdutoDencricao from "./assets/components/pages/ProdutoDencricao";

function App() {
  return (
    <Router>
      <Navbar/>
      <Conteiner customClass="min_heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/produtodencricao" element={<ProdutoDencricao />} />
        </Routes>
      </Conteiner>
      <Footer/>
    </Router>
  );
}

export default App;
