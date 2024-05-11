import MaisMenosBotao from "./MaisMenosBotao"

export default function ProdutoCarrinho({nome, imagem, valor, quantidade, idProduto, idCarrinho, idUsuario, idItem}){
    return(
        <MaisMenosBotao
            nomeProduto={nome}
            imagem={imagem}
            idItem={idItem}
            idUsuario={idUsuario}
            valor={valor} 
            quantidade={quantidade} 
            idProduto={idProduto}
            idCarrinho={idCarrinho}/>
    )
}