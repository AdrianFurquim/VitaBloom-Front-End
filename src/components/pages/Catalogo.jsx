import Produto from "../layout/Produto"
import styles from "./Catalogo.module.css"

import cremeUvaDivno from "../../assets/img/produto_uva_1.png"
import essenciaUvaCelestial from "../../assets/img/produto_uva_2.png"
import abacaxiOlimpus from "../../assets/img/produto_abacaxi_2.png"
import avocadoGlow from "../../assets/img/produto_abacate_1.png"
import pineappleDeling from "../../assets/img/produto_abacaxi_1.png"
import tropicalBreeze from "../../assets/img/produto_abacaxi_2.png"
import bananaBliss from "../../assets/img/produto_banana_1.png"
import citrusBurst from "../../assets/img/produto_laranja_1.png"
import orangeRadiano from "../../assets/img/produto_laranja_2.png"
import sunriseCitrus from "../../assets/img/produto_laranja_4.png"
import greenAplleRevive from "../../assets/img/produto_maca_1.png"
import strawberryKiss from "../../assets/img/produto_morango_1.png"
import berryFreshness from "../../assets/img/produto_morango_5.png"

import { useState, useEffect } from "react"

export default function Catalogo({idUsuario}){

    // Variáveis =============================================================================================================
    const [produtos, setProdutos] = useState([]);

    // Funções =============================================================================================================

    // Use Effect para pegar todos os produtos do banco de dados.
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

    // Função para obter a imagem com base no ID do produto.
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
                return bananaBliss;
            case 7:
                return citrusBurst;
            case 8:
                return orangeRadiano;
            case 9:
                return sunriseCitrus;
            case 10:
                return greenAplleRevive;
            case 11:
                return strawberryKiss;
            case 12:
                return berryFreshness;
            default:
                return ;
                // Retorna null se o ID não corresponder a nenhuma imagem.
        }
    };

    // Tela =============================================================================================================

    return (
        <>
            <h1 className={styles.titulo}>Nossos jeitinho <span className={styles.titulo_colorido}>VitaBloom</span> de ser com <span className={styles.vermelho}>amor</span>❤️</h1>
            <div className={styles.produtos_container}>
                {/* Loop para exibir todos os produtos do banco de dados */}
                {produtos.map(produto => (
                    // Usando um id como identificador.
                    <div key={produto.id}>
                        <div className={styles.outroteste}>
                            <Produto
                                idUsuario={idUsuario}
                                nome={produto.nomeProduto}
                                valor={produto.valorProduto}
                                descricao={produto.descricaoProduto}
                                imagem={getImagemProduto(produto.idProduto)}
                                idProduto={produto.idProduto}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
