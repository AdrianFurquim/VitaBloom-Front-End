import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando o hook de navegação
import Api from "../../servises";

export default function useAuth() {
    const [userInfos, setUserInfos] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Instanciando o hook de navegação

    async function handleLogin(email, pass) {
        try {
            setLoading(true);
            let { data } = await Api.get(`/vitabloom/usuarios/verificar/${email}/${pass}`);
            setUserInfos(data);

            if(data){
                navigate("/");
            }

        } catch (error) {
            console.error("Erro ao fazer login:", error);
        } finally {
            setLoading(false);
        }
    }

    return { 
        userInfos, 
        setUserInfos, 
        loading, 
        handleLogin 
    };
}
