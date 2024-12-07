import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

import styles from "./Footer.module.css"

export default function Footer() {
    // Tela =============================================================================================================
    return (
        <footer className={styles.footer}>

            {/* Links para navegação  */}
            <div className={styles.navegacao}>
                <h2>Navegação</h2>
                <Link to="/">Home</Link>
                <Link to="/catalogo">Produtos</Link>
                <Link to="/carrinho">Carrinho</Link>
                <Link to="/usuario/login">Login</Link>
            </div>

            {/* Links para o Repositório do Front e Back do projeto */}
            <div className={styles.outros_links}>
                <h2>Outros Links</h2>
                <a href="https://github.com/AdrianFurquim/VitaBloom-Front-End.git">GitHub Front-End</a>
                <a href="https://github.com/AdrianFurquim/VitaBloom-Back-End.git">GitHub Back-End</a>
            </div>

            {/* Imagems ilustrativas para Facebook e Instagram */}
            <div className={styles.extras}>
                <ul className={styles.social_list}>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                </ul>
                {/* Copytight e Criador */}
                <p className={styles.copy_right}><span>VitaBloom</span> &copy; 2024</p>
                <p className={styles.creator}>Adrian Eduardo Furquim de Souza</p>
            </div>

        </footer>
    )
}