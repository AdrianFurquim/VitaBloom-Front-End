import Api from "../index"

async function getProducts(
    // Passar parametros como o setProduct que ira ter
    setProductList
) {
    try {
        const response = await Api.get(`/vitabloom/produtos`);
        setProductList(response.data);
        console.log(response.data)
    } catch (err) {
        console.log(err)
    }
}

async function getProductsByOffer(
    idProduto, 
    setProductListOffer
) {
    try {
        const response = await Api.get(`http://localhost:8443/vitabloom/produto/${idProduto}`);
        setProductListOffer(response.data);
    } catch (err) {
        console.log(err)
    }
}

export {
    getProducts, 
    getProductsByOffer
}