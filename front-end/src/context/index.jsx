import { createContext } from "react";
import UserHook from "./hooks/user";
import ProductHook from "./hooks/product";
import useAuth from "./hooks/useAuth";

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
                setProductListOffer
            }}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider };