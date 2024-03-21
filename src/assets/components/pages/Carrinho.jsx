import ProdutoCarrinho from "../layout/ProdutoCarrinho"
import styles from "./Carrinho.module.css"

import cremeUvaDivno from "../../img/produto_uva_1.png"
import essenciaUvaCelestial from "../../img/produto_uva_2.png"
import abacaxiOlimpus from "../../img/produto_abacaxi_2.png"
import avocadoGlow from "../../img/produto_abacate_1.png"
import pineappleDeling from "../../img/produto_abacaxi_1.png"
import tropicalBreeze from "../../img/produto_abacaxi_2.png"
import bananaBliss from "../../img/produto_banana_1.png"
import citrusBurst from "../../img/produto_laranja_1.png"
import orangeRadiano from "../../img/produto_laranja_2.png"
import sunriseCitrus from "../../img/produto_laranja_4.png"
import greenAplleRevive from "../../img/produto_maca_1.png"
import strawberryKiss from "../../img/produto_morango_1.png"
import berryFreshness from "../../img/produto_morango_5.png"



import { useState, useEffect } from "react"

export default function Carrinho(){

    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:8443/vitabloom/carrinho/ver`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                setCarrinho(data);
            })
            .catch((err) => {
                console.log("Erro na requisição:", err);
            });
        }, 100);
    }, []);

    const getImagemProduto = (id) => {
        switch (id) {
            case 1:
                return cremeUvaDivno;
            case 2:
                return essenciaUvaCelestial;
            case 3:
                return abacaxiOlimpus;
            case 4:
                return avocadoGlow;
            case 5:
                return pineappleDeling;
            case 6:
                return tropicalBreeze;
            case 7:
                return bananaBliss;
            case 8:
                return citrusBurst;
            case 9:
                return orangeRadiano;
            case 10:
                return greenAplleRevive;
            case 11:
                return strawberryKiss;
            case 12:
                return berryFreshness;
            default:
                return ; // Retorna null se o ID não corresponder a nenhuma imagem
        }
    };

    return (
        <>
            <div>
                {carrinho.map(item => (
                    <div key={item.produtoId}>
                        <div className={styles.outroteste}>
                            <ProdutoCarrinho 
                                nome={item.produto.nomeProduto} 
                                valor={
                                    item.produto.valorProduto* item.quantidade
                                } 
                                quantidade={item.quantidade} 
                                imagem={getImagemProduto(item.produto.idProduto)}/>
                        </div>
                    </div>
            ))}

            </div>
        </>
    )
}