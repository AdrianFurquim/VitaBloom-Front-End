import { Link } from "react-router-dom"
import Conteiner from "./Conteiner"

import styles from "./Navbar.module.css"
import logo_imagem from "../../img/logo_imagem.png"
import logo_escrita from "../../img/logo_escrita.png"

export default function Navbar() {
    return (

        <nav className={styles.navbar}>
            <Conteiner> 
                <Link to="/">
                    <img src={logo_imagem} className={styles.logo_imagem} alt="Logo_Vita_Bloom" />
                    <img src={logo_escrita} className={styles.logo_escrita} alt="Logo_Escrita_nome_Vita_Bloom" />

                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/catalogo">Produtos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                    
                </ul>
            </Conteiner>
        </nav>
    )
}