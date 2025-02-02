import { createContext } from "react";
import UserHook from "./hooks/user";
import ProductHook from "./hooks/product";

const Context = createContext();

function AuthProvider({ children }) {
    // Lista de váriaveis
    const {
        userId, 
        setUserId,
        userName, 
        setUserName, 
        userEmail, 
        setUserEmail, 
        userPassword,
        setUserPassword
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
                userId, 
                setUserId,
                userName, 
                setUserName, 
                userEmail, 
                setUserEmail, 
                userPassword,
                setUserPassword,
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