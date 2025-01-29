import { createContext } from "react";
import UserHook from "./hooks/user";

const Context = createContext();

function AuthProvider({ children }) {
    // Lista de váriaveis
    const {
        userList, 
        setUserList
    } = UserHook();

    return (
        <Context.Provider 
            value={{
                userList, 
                setUserList
            }}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider };