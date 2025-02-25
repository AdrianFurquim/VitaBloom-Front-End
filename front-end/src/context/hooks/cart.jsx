import { useState } from "react";
import { getProductsByOffer } from "../../servises/product/product";

export default function CartHook() {
    const [itensCart, setItensCart] = useState([]);
    const [totalItensCart, setTotalItensCart] = useState(0);

    return {
        itensCart, 
        setItensCart, 
        totalItensCart, 
        setTotalItensCart
    };
}

