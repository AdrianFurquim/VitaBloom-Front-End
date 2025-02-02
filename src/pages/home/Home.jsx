import styles from "./Home.module.css"
import produtos from "../../assets/img/produtos_na_caixa.png"
import LinkButton from "../../components/layout/LinkButton"
import ProdutosCaixa from "../../components/product/ProdutosCaixa"
import { createContext, useContext } from "react"
import { Context } from "../../context"

export default function Home(){

    const { 
        userList, 
        setUserList } = useContext(Context)

    // Tela =============================================================================================================
    return (
        <section className={styles.home_conteiner}>
            <h1>Bem vindo ao <span>Vita Bloom</span></h1>
            <LinkButton to="/catalogo" text="Nosso Catalogo" />
            <br></br>
            <ProdutosCaixa></ProdutosCaixa>
        </section>
    )
}
