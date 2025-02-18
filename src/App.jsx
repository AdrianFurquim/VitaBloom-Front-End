import { BrowserRouter } from "react-router-dom";

import styles from "./components/user/UsuarioNavbar.module.css";
import { useState } from "react";
import { AuthProvider } from "./context";
import RoutesComp from "./routes";

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
    <BrowserRouter>
      <AuthProvider>
          <RoutesComp />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
