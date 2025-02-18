import styles from "./UsuarioNavbar.module.css";
import usuarioIcone from "../../assets/img/usuario_icon.png";
import { useState, useContext } from "react";
import { Context } from "../../context"

export default function UsuarioNavbar() {
        
    const {
        userInfos
    } = useContext(Context)

    // Tela =============================================================================================================
    return(
        <div className={styles.conteinerAccont}>
            <p>
                {userInfos && userInfos.nome ? userInfos.nome : "Entrar"}
            </p>
            <img src={usuarioIcone} alt="imagem de usuário padrão" />
        </div>
    )
}
