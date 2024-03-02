import Produto from "../layout/Produto"
import styles from "./Catalogo.module.css"
import produtoUva1 from "../../img/produto_uva_1.png"
import produtoUva2 from "../../img/produto_uva_2.png"
import produtoMelancia1 from "../../img/produto_melancia_1.png"
import produtoMelancia2 from "../../img/produto_melancia_2.png"
import produtoMelancia3 from "../../img/produto_melancia_3.png"


export default function Catalogo(){
    let texto = "Apresentando 'Essência Uva Celestial': uma fragrância que captura toda a exuberância e frescor das vinhas exuberantes em uma única gota. Com uma mistura encantadora de notas frutadas e florais, esta fragrância evoca a sensação celestial de um pomar de uvas em plena floração. Clike no carrinho para adicionar este produto em sua sacola."
    return(
        <div className={styles.produtos_container}>


            <Produto nome="Creme de Uva Divino" valor="59.99" descricao={texto} imagem={produtoUva1}></Produto>
            <Produto nome="Essência Uva Celestial" valor="249.99" descricao={texto} imagem={produtoUva2}></Produto>
            <Produto nome="Creme de Melancia Do tio Zé" valor="249.99" descricao={texto} imagem={produtoMelancia1}></Produto>
            <Produto nome="Fragrancia de Uva" valor="249.99" imagem={produtoMelancia2}></Produto>
            <Produto nome="Fragrancia de Uva" valor="249.99" imagem={produtoMelancia3}></Produto>
            <Produto nome="Fragrancia de Uva" valor="249.99" imagem={produtoMelancia1}></Produto>
            <Produto nome="Fragrancia de Uva" valor="249.99" imagem={produtoMelancia1}></Produto>
            
        </div>
    )
}