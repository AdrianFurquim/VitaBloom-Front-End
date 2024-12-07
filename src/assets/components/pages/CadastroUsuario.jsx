import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./CadastroUsuario.module.css";

export default function CadastroUsuario() {

    // Vatiáveis =============================================================================================================
    const [nome , setNome] = useState("");
    const [email , setEmail] = useState("");
    const [cpf , setCpf] = useState("");
    const [estado , setEstado] = useState("");
    const [cidade , setCidade] = useState("");
    const [cep , setCep] = useState("");
    const [senha , setSenha] = useState("");
    const [confSenha , setConfSenha] = useState("");

    // Use Navigate para realizar a naveção entre as telas.
    const navigate = useNavigate();

    // Variáveis para mostrar mensagem em caso de erros.
    const [mensagemNome, setMensagemNome] = useState(styles.mensagem);
    const [mensagemEmail, setMensagemEmail] = useState(styles.mensagem);
    const [mensagemCpf, setMensagemCpf] = useState(styles.mensagem);
    const [mensagemEstado, setMensagemEstado] = useState(styles.mensagem);
    const [mensagemCidade, setMensagemCidade] = useState(styles.mensagem);
    const [mensagemCep, setMensagemCep] = useState(styles.mensagem);
    const [mensagemSenha, setMensagemSenha] = useState(styles.mensagem);
    const [mensagemConfSenha, setMensagemConfSenha] = useState(styles.mensagem);
    const [mensagemEmailExis, setMensagemEmailExis] = useState(styles.mensagem);
    const [existeUsu, setExisteUsu] = useState(false);

    // Funções =============================================================================================================

    // Função para verificar se existe algum dado dentro dos inputs.
    function verificaDados(e) {
        if (!nome) {
            setMensagemNome(styles.mensagem_error);
            e.preventDefault();
            return
        }else{
            setMensagemNome(styles.mensagem);
        }
        if (!email) {
            setMensagemEmail(styles.mensagem_error);
            e.preventDefault();
            return
        }else{
            setMensagemEmail(styles.mensagem);
        }
        if (!cpf) {
            setMensagemCpf(styles.mensagem_error);
            e.preventDefault();
            return
        }else{
            setMensagemCpf(styles.mensagem);
        }
        if (!estado) {
            setMensagemEstado(styles.mensagem_error);
            e.preventDefault();
            return
        }else{
            setMensagemEstado(styles.mensagem);
        }
        if (!cidade) {
            setMensagemCidade(styles.mensagem_error);
            e.preventDefault();
            return
        }else{
            setMensagemCidade(styles.mensagem);
        }
        if (!cep) {
            setMensagemCep(styles.mensagem_error);
            e.preventDefault();
            return
        }else{
            setMensagemCep(styles.mensagem);
        }
        if(!senha){
            setMensagemSenha(styles.mensagem_error);
            e.preventDefault();
            return
        }else{
            setMensagemSenha(styles.mensagem);
        }
        
        if (senha == confSenha) {
            setMensagemConfSenha(styles.mensagem);
        }
        else{
            setMensagemConfSenha(styles.mensagem_error);
            e.preventDefault();
            return
        }

        // Chamar função para verificar se o Email já esta cadastrado.
        verificarEmailExistente(e);
    }

    // Função para cadastrar os dados no banco de dados pela API.
    function cadastrar(e) {
        // Carrinho sem nenhum componente somente para iniciar o carrinho.
        const carrinho = {
        }

        fetch(`http://localhost:8443/vitabloom/usuarios/inserir`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            cpf: cpf,
            estado: estado,
            cidade: cidade,
            cep: cep,
            senha: senha,
            carrinho: carrinho
        })
        })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log("Erro na requisição:", err);
        });
    }

    // Função para logo após o cadastro ir para a tela de login.
    function voltarLogin(){
        navigate("/usuario/login");
    }

    // Função para verificar se o Email já existe no banco.
    function verificarEmailExistente(event){
        fetch(`http://localhost:8443/vitabloom/usuarios/verificar/email/${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log("Dados recebidos:", data);
            setMensagemEmailExis(styles.mensagem_error);
            event.preventDefault();
            return false;
        })
        .catch((err) => {
            console.log("Erro na requisição:", err);        
            setMensagemEmailExis(styles.mensagem);
            cadastrar();
            voltarLogin();
        });
    }

    // Tela =============================================================================================================

    return(
        <div className={styles.cadastro_conteiner}>
            <h2>Cadastro usuario</h2>
            <p>Insira dados imaginários</p>
            <form className={styles.formCad}>
                <div>
                    {/* Nome */}
                    <div className={mensagemNome}>Por favor, insira um nome</div>
                    <label htmlFor="nome">Nome: </label><br />
                    <input type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)}/>
                    <br /> <br />

                    {/* Email */}
                    <div className={mensagemEmail}>Por favor, insira um email</div>
                    <div className={mensagemEmailExis}>Este email já possui um cadastro!</div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    <br /> <br />

                    {/* CPF */}
                    <div className={mensagemCpf}>Por favor, insira um CPF</div>
                    <label htmlFor="cpf">cpf: </label><br />
                    <input type="text" name="cpf" id="cpf" onChange={(e) => setCpf(e.target.value)}/>
                    <br /> <br />

                    {/* Estado */}
                    <div className={mensagemEstado}>Por favor, insira seu estado</div>
                    <label htmlFor="estado">Estado: </label><br />
                    <input type="text" name="estado" id="estado" onChange={(e) => setEstado(e.target.value)}/>
                    <br /> <br />
                </div>
                <div>
                    {/* Cidade */}
                    <div className={mensagemCidade}>Por favor, insira sua cidade</div>
                    <label htmlFor="cidade">Cidade: </label><br />
                    <input type="text" name="cidade" id="cidade" onChange={(e) => setCidade(e.target.value)}/>
                    <br /> <br />

                    {/* CEP */}
                    <div className={mensagemCep}>Por favor, insira set CEP</div>
                    <label htmlFor="cep">CEP: </label><br />
                    <input type="text" name="cep" id="cep" onChange={(e) => setCep(e.target.value)}/>
                    <br /> <br />

                    {/* Senha */}
                    <div className={mensagemSenha}>Por favor, insira uma senha</div>
                    <label htmlFor="senha">Senha: </label><br />
                    <input type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)}/>
                    <br /> <br />

                    {/* Confirmar Senha */}
                    <div className={mensagemConfSenha}>Por favor, insira a mesma senha</div>
                    <label htmlFor="confSenha">Confirmar senha: </label><br />
                    <input type="password" name="confSenha" id="confSenha" onChange={(e) => setConfSenha(e.target.value)}/>
                    <br /> <br />
                </div>
            </form>
            {/* Botão de Enviar */}
            <button className={styles.btnCadastrar} onClick={verificaDados}>Enviar</button>
        </div>
    )
}
