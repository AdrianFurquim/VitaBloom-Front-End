import { useState } from "react";
import { getProductsByOffer } from "../../servises/product/product";

export default function ProductHook() {
    const [productList, setProductList] = useState([]);
    const [productListOffer, setProductListOffer] = useState([]);

    return {
        productList, 
        setProductList, 
        productListOffer, 
        setProductListOffer
    };
}

