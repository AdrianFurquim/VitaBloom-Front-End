import { FaFacebook, FaInstagram } from "react-icons/fa"

import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
            </ul>
            <p className={styles.copy_right}><span>VitaBloom</span> &copy; 2024</p>
        </footer>
    )
}