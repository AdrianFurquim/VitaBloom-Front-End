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

import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context"
import { getItensCart } from "../../servises/cart/cart"

export default function Carrinho(){

    // Váriaveis =============================================================================================================
    const [isItenCarrinho, setIsItensCarrinho] = useState(false)

    const [valueTotalCart, setValueTotalCart] = useState(0);
    const [valueCupom, setValueCupom] = useState(0);
    const [valueNotCupom, setValueNotCupom] = useState();
    const [cupom, setCupom] = useState();
    const [msgOldValue, setMsgOldValue] = useState(styles.msgDisplayNone);
    const [msgNewValue, setMsgNewValue] = useState(styles.msgDisplayNone);
    const [msgNotCupom, setMsgNotCupom] = useState(styles.msgNotCupom);
    const [msgInvalidCupom, setMsgInvalidCupom] = useState(styles.msgDisplayNone);
    const cupons = ["CUBONLI", "10%OFF", "VITABLOOM", "PRIMEIRACOMPRA"]

    const {
        itensCart, 
        setItensCart, 
        userInfos, 
    } = useContext(Context);

    const fetchItensCart = async () => {
        getItensCart(
            userInfos.idUsuario, 
            setItensCart
        )
    }

    useEffect(() => {
        fetchItensCart();
        if(itensCart){
            setIsItensCarrinho(true);
        }else{
            setIsItensCarrinho(false);
        }
        let total = 0;
        for (let index = 0; index < itensCart.length; index++) {
            total += itensCart[index].produto.valorProduto * itensCart[index].quantidade;
        }

        aplicaCupom(total);
    }, [itensCart]);

    function aplicaCupom(total) {
        if(valueTotalCart >= 400){
            switch (cupom) {
                case cupons[0]:
                    setMsgOldValue(styles.msgOldValue);
                    setMsgNewValue(styles.msgNewValue);
                    setMsgNotCupom(styles.msgDisplayNone);
                    setMsgInvalidCupom(styles.msgDisplayNone);

                    setValueNotCupom(parseFloat(total.toFixed(2)));
                    total = total - 200;
                    setValueTotalCart(parseFloat(total.toFixed(2)));
                    break;
                case cupons[1]:
                    setMsgOldValue(styles.msgOldValue);
                    setMsgNewValue(styles.msgNewValue);
                    setMsgNotCupom(styles.msgDisplayNone);
                    setMsgInvalidCupom(styles.msgDisplayNone);

                    setValueNotCupom(parseFloat(total.toFixed(2)));
                    total = total - (total * 0.1);
                    setValueTotalCart(parseFloat(total.toFixed(2)));
                    break;
                case cupons[2]:
                    setMsgOldValue(styles.msgOldValue);
                    setMsgNewValue(styles.msgNewValue);
                    setMsgNotCupom(styles.msgDisplayNone);
                    setMsgInvalidCupom(styles.msgDisplayNone);

                    setValueNotCupom(parseFloat(total.toFixed(2)));
                    total = total - 150;
                    setValueTotalCart(parseFloat(total.toFixed(2)));
                    break;
                case cupons[3]:
                    setMsgOldValue(styles.msgOldValue);
                    setMsgNewValue(styles.msgNewValue);
                    setMsgNotCupom(styles.msgDisplayNone);
                    setMsgInvalidCupom(styles.msgDisplayNone);

                    setValueNotCupom(parseFloat(total.toFixed(2)));
                    total = total - 100;
                    setValueTotalCart(parseFloat(total.toFixed(2)));
                    break;
                default:
                    setMsgOldValue(styles.msgDisplayNone);
                    setMsgNewValue(styles.msgDisplayNone);
                    setMsgNotCupom(styles.msgNotCupom);
                    setMsgInvalidCupom(styles.msgDisplayNone)
                    setValueTotalCart(parseFloat(total.toFixed(2)));
                    break;
            }
        } else {
            setMsgOldValue(styles.msgDisplayNone);
            setMsgNewValue(styles.msgDisplayNone);
            setMsgNotCupom(styles.msgNotCupom);
            setMsgInvalidCupom(styles.msgDisplayNone);
            setValueTotalCart(parseFloat(total.toFixed(2)));
        }
    }

    const renderizarCarrinho = () => {
        if (itensCart.length != 0) {
            return (
                <section className={styles.conteinerCart}>
                    {/* Loop para exibir os itens do carrinho do usuário logado */}
                    <div className={styles.conteinerCartProducts}>
                        {itensCart.map(item => (
                            // Usando identificador para Loop.
                            <div key={item.produtoId} className={styles.conteiner_itens_carrinho}>
                                <ProdutoCarrinho 
                                    idItem={item.id}
                                    idUsuario={userInfos.idUsuario}
                                    nome={item.produto.nomeProduto} 
                                    valor={item.produto.valorProduto * item.quantidade} 
                                    quantidade={item.quantidade} 
                                    imagem={getImagemProduto(item.produto.idProduto)}
                                    idProduto={item.produto.idProduto}
                                    idCarrinho={item.produtoId}
                                    />
                            </div>
                        ))}
                    </div>

                    <div className={styles.conteinerCartValueTotal}>
                        <h1 className={styles.conteinerCartValueTotalTitle} >Resumo do Carrinho</h1>
                        <div className={styles.conteinerCartValueTotalPrice}>
                            <h1>Valor Total do carrinho: </h1>
                            <h3 className={msgOldValue}>RS: { valueNotCupom }</h3>
                            <h1 className={msgNewValue}>R$: { valueTotalCart }</h1>
                            <h1 className={msgNotCupom}>R$: { valueTotalCart }</h1>
                        </div>

                        <div className={styles.conteinerCartValueTotalCupom}>
                            <label htmlFor="cupom">Insira um cupom válido: </label><br />
                            <input type="text" name="cupom" id="cupom" onChange={(e) => setCupom(e.target.value)}/>
                            <p className={msgInvalidCupom}>Este cupom é inválido</p>
                        </div>

                        <div className={styles.conteinerCartValueTotalButtons}>
                            <button type="button">Comprar</button>
                        </div>

                    </div>

                </section>
            )
        } else {
            // Caso o usuário não esteja logado.
            // Ou não exista nenhum produto no carrinho.
            if (!userInfos) {
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
