import Api from "../index"
import { useNavigate } from 'react-router-dom';

async function checkUser(
    userEmail, 
    userPassword,
    setUserLogin
) {
    const navigate = useNavigate();
    try {
        const response = await Api.get(`/vitabloom/usuarios/verificar/${userEmail}/${userPassword}`);
        
        if(response.data != null){
            setUserLogin(response.data);
            
        }else{
            console.log("Usuário não encontrado")
        }
    } catch (err) {
        console.log(err)
    }
}

export {
    checkUser
}