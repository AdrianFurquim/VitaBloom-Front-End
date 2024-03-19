import Produto from "../layout/Produto"
import styles from "./Catalogo.module.css"
import produtoUva1 from "../../img/produto_uva_1.png"
import produtoUva2 from "../../img/produto_uva_2.png"
import produtoMelancia1 from "../../img/produto_melancia_1.png"
import produtoAbacaxi1 from "../../img/produto_abacaxi_1.png"
import produtoLaranja1 from "../../img/produto_laranja_1.png"
import produtoMorango1 from "../../img/produto_morango_1.png"

import { useState, useEffect } from "react"

export default function Catalogo(){

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:8443/vitabloom/produtos`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log("Dados recebidos:", data);
                setProdutos(data);
            })
            .catch((err) => {
                console.log("Erro na requisição:", err);
            });
        }, 100);
    }, []);


    let texto = "Apresentando 'Essência Uva Celestial': uma fragrância que captura toda a exuberância e frescor das vinhas exuberantes em uma única gota. Com uma mistura encantadora de notas frutadas e florais, esta fragrância evoca a sensação celestial de um pomar de uvas em plena floração. Clike no carrinho para adicionar este produto em seu carrinho."
    return(
        <div className={styles.produtos_container}> 
            <div  className={styles.teste}>
                {produtos.map(produto => (
                    <div key={produto.id}>
                        <Produto className={styles.teste} nome={produto.nomeProduto} valor={produto.valorProduto} descricao={produto.descricaoProduto} imagem={produtoAbacaxi1}/>
                        <Produto className={styles.teste} nome={produto.nomeProduto} valor={produto.valorProduto} descricao={produto.descricaoProduto} imagem={produtoAbacaxi1}/>
                        <Produto className={styles.teste} nome={produto.nomeProduto} valor={produto.valorProduto} descricao={produto.descricaoProduto} imagem={produtoAbacaxi1}/>
                        <Produto className={styles.teste} nome={produto.nomeProduto} valor={produto.valorProduto} descricao={produto.descricaoProduto} imagem={produtoAbacaxi1}/>
                        <Produto className={styles.teste} nome={produto.nomeProduto} valor={produto.valorProduto} descricao={produto.descricaoProduto} imagem={produtoAbacaxi1}/>
                        <Produto className={styles.teste} nome={produto.nomeProduto} valor={produto.valorProduto} descricao={produto.descricaoProduto} imagem={produtoAbacaxi1}/>
                        <Produto className={styles.teste} nome={produto.nomeProduto} valor={produto.valorProduto} descricao={produto.descricaoProduto} imagem={produtoAbacaxi1}/>
                    </div>
                ))}
            </div>
        </div>
    )
}