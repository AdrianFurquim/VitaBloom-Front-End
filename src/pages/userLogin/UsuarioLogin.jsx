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
    const [mensagemEmail, setMensagemEmail] = useState(styles.mensagem_error);
    const [mensagemSenha, setMensagemSenha] = useState(styles.mensagem_error);
    const [mensagemSemCad, setMensagemSemCad] = useState(styles.mensagem_error);
    const [usuario, setUsuario] = useState();
    const navigate = useNavigate();

    const {
        userId, 
        setUserId,
        userName, 
        setUserName, 
        userEmail, 
        setUserEmail, 
        userPassword,
        setUserPassword
    } = useContext(Context);

    // Funções =============================================================================================================

    // Verificação para se o usuário preencheu os dados.
    function verificaDados(e) {
        fetchCheckUser();
        if (!email) {
            // Aparece mensagem de erro e retorna.
            setMensagemEmail(styles.mensagem_error);
            e.preventDefault();
            return;
        }else{
            // Desaparece mensagem de erro caso tenha preenchido os dados.
            setMensagemEmail(styles.mensagem);
        }
        if (!senha) {
            // Aparece mensagem de erro e retorna.
            setMensagemSenha(styles.mensagem_error);
            e.preventDefault();
            return;
        }else{
            // Desaparece mensagem de erro caso tenha preenchido os dados.
            setMensagemSenha(styles.mensagem);
        }

        // Chama função para verificar se o cadastro existe no banco.
        verificarCadastro();
    }

    // Função para verificar se o login realizado existe realmente no banco de dados.
    function verificarCadastro(e) {
        fetch(`http://localhost:8443/vitabloom/usuarios/verificar/${email}/${senha}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log("Dados recebidos:", data);
            setUsuario(data);
            handleClick(data.nome, data.idUsuario)
            setMensagemSemCad(styles.mensagem);
        })
        .catch((err) => {
            console.log("Erro na requisição:", err);            
            setMensagemSemCad(styles.mensagem_error);
        });
    }

    // Handle click para passar que o usuário está logado, e para voltar a home.
    function handleClick(nome, idUsuario) {
        props.handleResult(nome, idUsuario);
        navigate("/");
    }

    const fetchCheckUser = async () => {
        checkUser(
            email, 
            senha, 
            setUserId
        )
    }

    // useEffect(() => {
    //     fetchCheckUser();
    // }, [])

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
                        <p className={mensagemEmail}>Por favor, insira um email</p>
                    </div>

                    {/* Senha */}
                    <div className={styles.conteinerLoginInput} >
                        <p >Senha: </p>
                        <input type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} />
                        <p className={mensagemSenha}>Por favor, insira a senha</p>
                    </div>

                    {/* Em caso de usuário não reconhecido */}
                    <p className={mensagemSemCad}>Usuário não reconhecido</p>
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
