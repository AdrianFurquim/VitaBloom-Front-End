import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Catalogo from "../pages/catalog/Catalogo";
import Carrinho from "../pages/cart/Carrinho";
import UsuarioLogin from "../pages/userLogin/UsuarioLogin";
import CadastroUsuario from "../pages/userCad/CadastroUsuario";
import Main from "../pages/main";

export default function RoutesComp() {

    return(
        <Routes>
            <Route element={<Main />}>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/usuario/login" element={<UsuarioLogin />} />
                <Route path="/usuario/cadastro" element={<CadastroUsuario />} />
            </Route>
        </Routes>
    )
}