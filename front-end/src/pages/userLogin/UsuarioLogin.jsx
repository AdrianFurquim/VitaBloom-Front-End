import { Link, useNavigate } from "react-router-dom";
import styles from "./UsuarioLogin.module.css"
import logo_imagem from "../../assets/img/logo_imagem.png"
import logo_escrita from "../../assets/img/logo_escrita.png"
import { useState , useEffect, useContext} from "react"
import { checkUser } from "../../servises/user/user";
import { Context } from "../../context";

export default function UsuarioLogin(props) {

    // Vatiáveis =============================================================================================================
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [messageEmail, setMessageEmail] = useState(styles.message);
    const [messageSenha, setMessageSenha] = useState(styles.message);
    const [messageSemCad, setMessageSemCad] = useState(styles.message);  
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const navigate = useNavigate();

    const {
        userInfos, 
        handleLogin
    } = useContext(Context);

    // Funções =============================================================================================================

    // Verificação para se o usuário preencheu os dados.
    async function verificaDados(e) {
        if (!email) {
            // Aparece mensagem de erro e retorna.
            setMessageEmail(styles.message_error);
            e.preventDefault();
            return;
        }else{
            // Desaparece mensagem de erro caso tenha preenchido os dados.
            setMessageEmail(styles.message);
        }
        if (!senha) {
            // Aparece mensagem de erro e retorna.
            setMessageSenha(styles.message_error);
            e.preventDefault();
            return;
        }else{
            // Desaparece mensagem de erro caso tenha preenchido os dados.
            setMessageSenha(styles.message);
        }

        if(email && senha){
            e.preventDefault();
            const user = await handleLogin(email, senha);
            if (user && user[0]) {
                
            } else {
                setMessageSemCad(styles.message_error)
                e.preventDefault();
                return;
            }

        }
    }

    // Tela =============================================================================================================

    return(
        <section className={styles.section_login}>

            {/* Conteiner Login */}
            <div className={styles.conteiner_login}>
                <p className={styles.conteinerLoginTitle}>Login</p>
                <form className={styles.conteinerLoginForm}>
                    {/* Email */}
                    <div className={styles.conteinerLoginInput} >
                        <p >Email:</p>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        <p className={messageEmail}>Por favor, insira um email</p>
                    </div>

                    {/* Senha */}
                    <div className={styles.conteinerLoginInput} >
                        <p >Senha: </p>
                        <input type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} />
                        <p className={messageSenha}>Por favor, insira a senha</p>
                    </div>

                    {/* Em caso de usuário não reconhecido */}
                    <p className={messageSemCad}>Email ou senha incorretas</p>
                </form>

                <div className={styles.conteinerLoginButton}>
                    {/* Botão para verificar dados, ou para cadastrar */}
                    <button className={styles.btnLogin} onClick={verificaDados}>Enviar</button>
                    
                    <Link className={styles.cadastrar} to="/usuario/cadastro"> Cadastrar</Link>
                    
                </div>
            </div>
        </section>
    )
}
