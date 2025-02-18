import { Link } from "react-router-dom"

import Conteiner from "./Conteiner"
import styles from "./Navbar.module.css"
import imageLogo from "../../assets/img/logo_imagem.png"
import writtenLogo from "../../assets/img/logo_escrita.png"
import UsuarioNavbar from "../user/UsuarioNavbar"

export default function Navbar({name, logado}) {

    // Tela =============================================================================================================
    return (
        <nav className={styles.conteinerNavbar}>
                
                <div className={styles.conteinerNavbarLogo}>
                    <Link to="/">
                        <img src={imageLogo} className={styles.conteinerNavbarLogoImage} alt="Logo_Vita_Bloom" />
                        <img src={writtenLogo} className={styles.conteinerNavbarLogoWritten} alt="Logo_Escrita_nome_Vita_Bloom" />
                    </Link>
                </div>

                <div className={styles.conteinerNavbarListLink}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/catalogo">Produtos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/carrinho">Carrinho</Link>
                        </li>
                        
                        <li className={styles.itemLogin}>
                            <Link to="/usuario/login">
                                <UsuarioNavbar nomeUsu={name} logado={logado}/>
                            </Link>
                        </li>
                    </ul>            
                </div>
        </nav>
    )
}
