import styles from "./Produto.module.css";
import carrinho from "../../img/carrinho-de-compras.png";

import { useEffect } from "react";

export default function Produto({ imagem, nome, valor, descricao, idProduto }) {

    function adicionarItemCarrinho(idProduto) {
        const item = {
          produtoId: idProduto,
          quantidade: 1 // Você pode ajustar a quantidade conforme necessário
        };
      
        fetch(`http://localhost:8443/carrinho/adicionar-item`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            idCarrinho: 1,
            itens: [item]
          })
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log("Erro na requisição:", err);
          });
      }

  return (
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
            <button
              className={styles.btn}
              onClick={() => adicionarItemCarrinho(idProduto)}
            >
              <img src={carrinho} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
