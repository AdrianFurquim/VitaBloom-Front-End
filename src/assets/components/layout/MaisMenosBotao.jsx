import { useState, useEffect } from 'react';
import styles from "./MaisMenosBotao.module.css"

export default function MaisMenosBotao({nomeProduto, imagem, valor, quantidade, idProduto, idUsuario, idItem}) {

    // Variáveis =============================================================================================================
    const [quantidadeItem, setQuantidadeItem] = useState(quantidade);
    const [valorItem, setValorItem] = useState(valor);
    const [remover, setRemoverItem] = useState("-");
    const [display, setDisplay] = useState(styles.produto_carrinho_container);

    const valorFixo = valor / quantidade;

    // Funções =============================================================================================================
    useEffect(() => {
        // Função a ser executada quando o componente for montado ou renderizado.
        if (quantidadeItem === 1) {
            setRemoverItem("Remover");
        }
    }, []);

    // Função de adicionar um item ao carrinho através do ID do usuário e do produto.
    function adicionarItemCarrinho(idProduto) {
        fetch(`http://localhost:8443/vitabloom/usuario/adicionaritem/${idUsuario}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                produto: {
                    idProduto: idProduto
                },
                quantidade: 1
            })
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log("Erro na requisição:", err);
        });
        // Métodos para que a pagina sempre se mantenha atualizada na de acordo com os valores.
        setQuantidadeItem(quantidadeItem + 1);
        setValorItem(valorFixo * (quantidadeItem + 1));
        setRemoverItem("-");
    }

    // Função para remover o item do carrinho do usuário.
    function removeItem() {
        if (quantidadeItem <= 1) {
            // Lógica de remoção do item se a quantidade for menor ou igual a zero
            fetch(`http://localhost:8443/vitabloom/usuario/removeitem/${idUsuario}/${idItem}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                
            })
            .catch((err) => {
                console.log("Erro na requisição:", err);
            });
            // Set display none para em tempo real, após ser excluido o produto, já irá sumir da tela.
            setDisplay(styles.displayNone);
        } else {
            // Lógica de remoção do item se a quantidade for maior a zero.
            // Neste caso irá apenas diminuir 1 da quantia do produto.
            fetch(`http://localhost:8443/vitabloom/usuario/adicionaritem/${idUsuario}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    produto: {
                        idProduto: idProduto
                    },
                    quantidade: -1
                })
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log("Erro na requisição:", err);
            });
            // SETs para realizar a atualização, e if para verificar se o valor não seria igual a 2.            
            setQuantidadeItem(quantidadeItem - 1);
            setValorItem(valorFixo * (quantidadeItem - 1));
            if (quantidadeItem === 2) {
                setRemoverItem("Remover");
            }
        }
    }

    // Tela =============================================================================================================

    return (
        <>
            <div className={display}>
                {/* Imagem do protudo */}
                <img src={imagem} alt="" className={styles.imagem_produto} />

                {/* Descrição do Produto */}
                <div className={styles.nome_produto}>
                    <h2>{nomeProduto}</h2>
                </div>
            
                <div className={styles.conteiner_valores}>
                    {/* Valor do Produto */}
                    <div className={styles.valor}>
                        <div>
                            <p>R$: {valorItem.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Opções de aumentar ou diminuir a quantia do produto */}
                    <div className={styles.conteiner_opcao}>
                        {/* Botão de Remover ou diminuir */}
                        <button 
                            className={`${styles.btnMenos} ${remover === "Remover" ? styles.btnMenosRemover : styles.btnMenos}`} 
                            onClick={removeItem}>{remover}
                        </button>
                        {/* Demosntra a quantidade */}
                        <p>{quantidadeItem}</p>
                        {/* Botão de Aumentar */}
                        <button 
                            className={styles.btnMais} 
                            onClick={() => adicionarItemCarrinho(idProduto)}>
                                +
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
