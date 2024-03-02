import styles from "./Produto.module.css"
import carrinho from "../../img/carrinho-de-compras.png"


export default function Produto({imagem, nome, valor, descricao}){
    return(
        <>
           <div className={styles.produto_container}>
                <img className={styles.imagem_produto} src={imagem} alt="" />
                <div className={styles.informacoes}>

                    <h1>{nome}</h1>
                    <br></br>
                    <p>Valor: R$ {valor}</p>
                    <br></br>
                    <p className={styles.invisivel}>{descricao}</p>
                    <br></br>
                    <div className={styles.produto_opcoes}>
                        <button className={styles.btn}>
                            <img src={carrinho} alt="" />
                        </button>
                    </div>

                </div>
                
            </div>
 
        </>
    )
}
