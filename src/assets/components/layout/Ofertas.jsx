import styles from "./Ofertas.module.css"
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
import coracao_balao from "../../img/coracao_balao.svg"

export default function Ofertas({idProduto}) {

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


    return (
        <div className={styles.produto_oferta}>
            <img src={getImagemProduto(idProduto)} alt="Produto de Beleza..." className={styles.imagem_oferta}/>
            <h2>Citrus Burst</h2>
            <div className={styles.valores}>
                <p>De: <span className={styles.valor_antigo}>R$ 149.90</span></p>
            </div>
            <h2>Por: <span className={styles.valor_novo}>R$ 99.90</span></h2>
        </div>
    )
}