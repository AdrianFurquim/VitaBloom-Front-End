import MaisMenosBotao from "./MaisMenosBotao"
import styles from "./ProdutoCarrinho.module.css"

export default function ProdutoCarrinho({nome, imagem, valor, quantidade, idProduto, idCarrinho, idUsuario, idItem}){
    return(
        <div className={styles.produto_carrinho_container}>
            <img src={imagem} alt="" className={styles.imagem_produto} />
            <div className={styles.descricao_produto}>
                <h2>{nome}</h2>
                <MaisMenosBotao 
                    idItem={idItem}
                    idUsuario={idUsuario}
                    valor={valor} 
                    quantidade={quantidade} 
                    idProduto={idProduto}
                    idCarrinho={idCarrinho}/>
            </div>
        </div>
    )
}