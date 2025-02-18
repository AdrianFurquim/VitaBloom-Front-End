import ProdutoCarrinho from "../../components/cart/ProdutoCarrinho"
import styles from "./Carrinho.module.css"

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
import { Link } from "react-router-dom"

export default function Carrinho({idUsuario}){

    // Váriaveis =============================================================================================================
    const [itensCarrinho, setItensCarrinho] = useState([]);
    const [usuario, setUsuario] = useState([]);

    // Funções =============================================================================================================
    
    // Verificação para se o usuário realizou o Login.
    if (!idUsuario) {
        console.log("Não foi cadastrado nenhum usuário");
    }else{
        // Atualiza e pega os dados do usuário que está logado.
        useEffect(() => {
            setTimeout(() => {
                fetch(`http://localhost:8443/vitabloom/usuarios/listarid/${idUsuario}`, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                .then((resp) => resp.json())
                .then((data) => {
                    setUsuario(data);
                    setItensCarrinho(data.carrinho.itens);
                })
                .catch((err) => {
                    console.log("Erro na requisição:", err);
                });
            }, 100);
        }, []);    
    }

    // Função para realizar a tela de acordo com os itens no carrinho do usuário.
    // Caso não tenha carrinho, caso não tenha retorna avisando, ou que não foi logado.
    // ou que não existe nenhum item no carrinho.
    const renderizarCarrinho = () => {
        if (itensCarrinho.length != 0) {
            return (
                <>
                    {/* Loop para exibir os itens do carrinho do usuário logado */}
                    {itensCarrinho.map(item => (
                        // Usando identificador para Loop.
                        <div key={item.produtoId} className={styles.conteiner_itens_carrinho}>
                            <ProdutoCarrinho 
                                idItem={item.id}
                                idUsuario={usuario.idUsuario}
                                nome={item.produto.nomeProduto} 
                                valor={item.produto.valorProduto * item.quantidade} 
                                quantidade={item.quantidade} 
                                imagem={getImagemProduto(item.produto.idProduto)}
                                idProduto={item.produto.idProduto}
                                idCarrinho={item.produtoId}
                                />
                        </div>
                    ))}

                </>
            )
        } else {
            // Caso o usuário não esteja logado.
            // Ou não exista nenhum produto no carrinho.
            if (!idUsuario) {
                return (
                    <div className={styles.conteinerCarMessageLogin}>
                        <h2 className={styles.mensagem_carrinho}>Por favor, realize o <Link to="/usuario/login">login</Link> em nossa plataforma</h2>;
                    </div>
                )
            }else{
                return (
                    <div className={styles.conteinerCarMessageLogin}>
                        <h2 className={styles.mensagem_carrinho}>Não existe nenhum item no carrinho</h2>;
                    </div>
                )
            }
        }
    };

    // Função para identificar as imagens do produto.
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
            {renderizarCarrinho()}
        </>
    )
}
