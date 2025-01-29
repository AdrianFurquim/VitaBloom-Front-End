import Api from "../index"

async function getProducts(
    // Passar parametros como o setProduct que ira ter
) {
    try {
        const response = await Api.get(`/vitabloom/produtos`);
    } catch (err) {
        console.log(err)
    }
}

export {
    getProducts
}