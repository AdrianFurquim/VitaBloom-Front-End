import Api from "../index"

async function checkUser(
    userEmail, 
    userPassword,
    setUserLogin
) {
    try {
        const response = await Api.get(`/vitabloom/usuarios/verificar/${userEmail}/${userPassword}`);
        if(response.data.idUsuario){
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