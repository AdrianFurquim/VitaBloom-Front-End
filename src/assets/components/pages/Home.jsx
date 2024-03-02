import styles from "./Home.module.css"
import produtos from "../../img/produtos_na_caixa.png"
import LinkButton from "../layout/Linkbutton"
import ProdutosCaixa from "../layout/produtosCaixa"

export default function Home(){
    return (
        <section className={styles.home_conteiner}>
            <h1>Bem vindo ao <span>Vita Bloom</span></h1>
            <LinkButton to="/catalogo" text="Nosso Catalogo" />
            <br></br>
            <ProdutosCaixa></ProdutosCaixa>
        </section>
    )
}