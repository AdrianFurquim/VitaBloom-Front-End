import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Conteiner from "./components/layout/Conteiner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Catalogo from "./components/pages/Catalogo";
import Carrinho from "./components/pages/Carrinho";
import UsuarioLogin from "./components/pages/UsuarioLogin";
import CadastroUsuario from "./components/pages/CadastroUsuario";
import styles from "./components/layout/UsuarioNavbar.module.css";
import { useState } from "react";
import ButtonTop from "./components/layout/ButtonTop";
import { AuthProvider } from "./context";

function App() {
  
  // Variáveis =============================================================================================================
  const[nome, setNome] = useState();
  const[idUsuario, setIdUsuario] = useState();
  const[logado, setLogado] = useState(styles.conteiner_usuario);

  // Funções =============================================================================================================

  // Função para verificar se existe algum usuário logado.
  const updateNome = (r, id) =>{
      setNome(r);
      setIdUsuario(id);
      setLogado(styles.logado);
  }

  // Tela =============================================================================================================

  return (
    <AuthProvider>
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
        <ButtonTop/>
        <Footer/>
      </Router>
    </AuthProvider>
  )
}

export default App;
