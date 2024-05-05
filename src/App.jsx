import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./assets/components/pages/Home";
import Conteiner from "./assets/components/layout/Conteiner";
import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";
import Catalogo from "./assets/components/pages/Catalogo";
import Carrinho from "./assets/components/pages/Carrinho";
import UsuarioLogin from "./assets/components/pages/UsuarioLogin";
import CadastroUsuario from "./assets/components/pages/CadastroUsuario";
import styles from "./assets/components/layout/UsuarioNavbar.module.css";
import { useState } from "react";

function App() {
  
  const[nome, setNome] = useState();
  const[idUsuario, setIdUsuario] = useState();
  const[logado, setLogado] = useState(styles.conteiner_usuario);

  // Função para verificar se existe algum usuário logado.
  const updateNome = (r, id) =>{
      setNome(r);
      setIdUsuario(id);
      setLogado(styles.logado);
  }

  return (
    <Router>
      <Navbar name={nome} logado={logado}/>
      <Conteiner customClass="min_heigth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo idUsuario={idUsuario}/>} />
          <Route path="/carrinho" element={<Carrinho idUsuario={idUsuario}/>} />
          <Route path="/usuario/login" element={<UsuarioLogin handleResult={updateNome}/>} />
          <Route path="/usuario/cadastro" element={<CadastroUsuario/>} />
        </Routes>
      </Conteiner>
      <Footer/>
    </Router>
  )
}

export default App;
