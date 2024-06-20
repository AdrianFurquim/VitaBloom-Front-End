import produtos_caixa from "../../img/produtos_na_caixa.png"
import styles from "./ProdutosCaixa.module.css"
import produto_sacola from '../../img/produto_sacola.png'
import Ofertas from "./Ofertas"

export default function ProdutosCaixa(){

    return (
        <>
            <div className={styles.produtosCaixa_container}>
                <img src={produtos_caixa} alt="" className={styles.imagens_caixa} />
                <div className={styles.texto}>
                    <h1>Quem somos?</h1>
                    <p>onde a beleza encontra a natureza em sua forma mais vibrante. Nossa marca é um convite para explorar os segredos da natureza tropical, trazendo a exuberância 
                        das frutas e os aromas revigorantes das florestas para a sua rotina de cuidados com a pele e cabelo.
                    </p>
                    <p>
                        Na Vita Bloom, cada produto é cuidadosamente formulado com ingredientes naturais, selecionados com dedicação para proporcionar uma experiência única de 
                        beleza e bem-estar. Nossas fórmulas são enriquecidas com extratos de frutas tropicais, ricos em vitaminas e antioxidantes, que revitalizam e nutrem sua 
                        pele, deixando-a radiante e saudável.
                    </p>
                </div>
            </div>
            <div className={styles.produtosOferta_container}>
                <h1>Ofertas do dia</h1>
                <div className={styles.ofertas_produtos}>
                    <Ofertas idProduto={7}/>
                    <Ofertas idProduto={7}/>
                    <Ofertas idProduto={7}/>
                </div>
                
            </div>
            <div className={styles.produtosCaixa_container}>
                <div className={styles.texto}>
                    <h1>Produtos</h1>
                    <p>
                        Desde cremes faciais a shampoos e condicionadores, cada produto Vita Bloom é uma celebração da biodiversidade e dos benefícios que a natureza oferece. 
                        Nossa missão é não apenas realçar a sua beleza exterior, mas também cultivar um profundo cuidado pelo meio ambiente, utilizando práticas sustentáveis em 
                        toda a nossa cadeia de produção.
                    </p>
                </div>
                <img src={produto_sacola} alt="" className={styles.imagens_caixa}/>
            </div>
        </>
    )
}
