import Api from "../index"

async function checkUser(
    userId, 
    setUserId,
    userName, 
    setUserName, 
    userEmail, 
    setUserEmail, 
    userPassword,
    setUserPassword
) {
    try {
        const response = await Api.get(`/vitabloom/usuarios/verificar/${userEmail}/${userPassword}`);
        if(response.data.idUsuario){
            setUserId(response.data.idUsuario);
            setUserName(response.data.nome);
            setUserEmail(response.data.email);
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