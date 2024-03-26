import MaisMenosBotao from "./MaisMenosBotao"
import styles from "./ProdutoCarrinho.module.css"


export default function ProdutoCarrinho({nome, imagem, valor, quantidade}){
    return(
        <div className={styles.produto_carrinho_container}>
            <img src={imagem} alt="" className={styles.imagem_produto} />
            <div className={styles.descricao_produto}>
                <h2>{nome}</h2>
                <MaisMenosBotao valor={valor} quantidade={quantidade}/>
            </div>
            
        </div>
    )
}