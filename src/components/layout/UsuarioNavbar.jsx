import styles from "./UsuarioNavbar.module.css";
import usuarioIcone from "../../assets/img/usuario_icon.png";
import { useState } from "react";

export default function UsuarioNavbar({nomeUsu, logado}) {

    // Verificação para caso o usuário não esteja Logado.
    if (!nomeUsu) {
        nomeUsu = "Entrar";
    }else{
    }

    // Tela =============================================================================================================
    return(
        <div className={logado}>
            <p>
                {nomeUsu}
            </p>
            <img src={usuarioIcone} alt="imagem de usuário padrão" />
        </div>
    )
}
