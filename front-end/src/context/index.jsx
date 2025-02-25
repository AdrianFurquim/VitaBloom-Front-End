import { createContext } from "react";
import UserHook from "./hooks/user";
import ProductHook from "./hooks/product";
import useAuth from "./hooks/useAuth";
import CartHook from "./hooks/cart";

const Context = createContext();

function AuthProvider({ children }) {
    // Lista de váriaveis
    const {
        userInfos, 
        setUserInfos, 
        loading, 
        setLoading,
        handleLogin
    } = useAuth();

    const {
        userLogin, 
        setUserLogin
    } = UserHook();

    const {
        productList, 
        setProductList, 
        productListOffer, 
        setProductListOffer
    } = ProductHook();

    const {
        itensCart, 
        setItensCart, 
        totalItensCart, 
        setTotalItensCart
    } = CartHook();

    return (
        <Context.Provider 
            value={{
                userInfos, 
                setUserInfos, 
                loading, 
                setLoading,
                handleLogin,
                userLogin, 
                setUserLogin,
                productList, 
                setProductList, 
                productListOffer, 
                setProductListOffer, 
                itensCart, 
                setItensCart, 
                totalItensCart, 
                setTotalItensCart
            }}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider };