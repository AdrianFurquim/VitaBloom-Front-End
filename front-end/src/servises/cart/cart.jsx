import Api from "../index"

async function getItensCart(
    // Passar parametros como o setProduct que ira ter
    userId, 
    setItensCart
) {
    try {
        const response = await Api.get(`/vitabloom/usuarios/listarid/${userId}`);
        setItensCart(response.data.carrinho.itens);
        console.log(response.data.carrinho.itens);
    } catch (err) {
        console.log(err)
    }
}

export {
    getItensCart
}