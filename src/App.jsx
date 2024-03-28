import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./assets/components/pages/Home";
import Conteiner from "./assets/components/layout/Conteiner";
import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";
import Catalogo from "./assets/components/pages/Catalogo";
import ProdutoDencricao from "./assets/components/pages/ProdutoDencricao";
import Carrinho from "./assets/components/pages/Carrinho";

function App() {
  return (
    <Router>
      <Navbar/>
      <Conteiner customClass="min_heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/produtodencricao" element={<ProdutoDencricao />} />
          <Route path="/carrinho" element={<Carrinho/>} />
        </Routes>
      </Conteiner>
      <Footer/>
    </Router>
  );
}

export default App;
