import ProdutoCarrinho from "../layout/ProdutoCarrinho"
import styles from "./Carrinho.module.css"
import produtoUva1 from "../../img/produto_uva_1.png"
import produtoAbacaxi1 from "../../img/produto_abacaxi_1.png"
import produtoLaranja1 from "../../img/produto_laranja_1.png"


export default function Carrinho(){
    return (
        <>
            <div>
                <ProdutoCarrinho nome="Essência Usa Celestial" valor="499.98" quantidade="2" imagem={produtoUva1}/>
                <ProdutoCarrinho nome="Coleção Abacaxi Tropical" valor="449.98" quantidade="1" imagem={produtoAbacaxi1}/>
                <ProdutoCarrinho nome="Hidratação Laranja Refrescante" valor="300.00" quantidade="3" imagem={produtoLaranja1}/>

            </div>
        </>
    )
}