import { useState, useEffect } from 'react';
import styles from "./MaisMenosBotao.module.css"

export default function MaisMenosBotao({ valor, quantidade, idProduto, idCarrinho }) {
    const [quantidadeItem, setQuantidadeItem] = useState(quantidade);
    const [valorItem, setValorItem] = useState(valor);
    const [remover, setRemoverItem] = useState("-");
    const valorFixo = valor / quantidade;

    useEffect(() => {
        // Função a ser executada quando o componente for montado ou renderizado
        if (quantidadeItem === 1) {
            setRemoverItem("Remover");
        }
    }, []); // Dependência vazia para garantir que o código seja executado apenas uma vez

    function adicionarItemCarrinho(idProduto) {
        const item = {
            produtoId: idProduto,
            quantidade: 1 // Você pode ajustar a quantidade conforme necessário
        };
        
        fetch(`http://localhost:8443/carrinho/adicionar-item`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idCarrinho: 1,
                itens: [item]
            })
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log("Erro na requisição:", err);
        });

        setQuantidadeItem(quantidadeItem + 1);
        setValorItem(valorFixo * (quantidadeItem + 1));
        setRemoverItem("-");
    }

    function removeItem() {
        if (quantidadeItem === 1) {
            // Lógica de remoção do item se a quantidade for menor ou igual a zero
            fetch(`http://localhost:8443/carrinho/item/delete/${idCarrinho}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                // Tratar resposta, se necessário
            })
            .catch((err) => {
                console.log("Erro na requisição:", err);
            });
            location.reload();
            setQuantidadeItem(quantidadeItem - 1);
            setValorItem(valorFixo * (quantidadeItem - 1));
            setRemoverItem("Remover");
        } else {
            // Lógica de remoção do item se a quantidade for maior a zero
            const item = {
                produtoId: idProduto,
                quantidade: quantidade 
            };
            
            fetch(`http://localhost:8443/carrinho/remover-item`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    idCarrinho: 1,
                    itens: [item]
                })
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log("Erro na requisição:", err);
            });    

            setQuantidadeItem(quantidadeItem - 1);
            setValorItem(valorFixo * (quantidadeItem - 1));
            if (quantidadeItem === 2) {
                setRemoverItem("Remover");
            }
        }
    }

    function addItem() {
        // Atualiza a quantidade e recalcula o valor do item
        setQuantidadeItem(quantidadeItem + 1);
        setValorItem((quantidadeItem + 1) * valor);
        setRemoverItem("-");
    }

    return (
        <div className={styles.conteiner_total}>
            <div className={styles.valor}>
                <div>
                    <p>R$: {valorItem.toFixed(2)}</p>
                </div>
            </div>
            <div className={styles.conteiner_opcao}>
                <button className={`${styles.btnMenos} ${remover === "Remover" ? styles.btnMenosRemover : styles.btnMenos}`} onClick={removeItem}>{remover}</button>
                <p>{quantidadeItem}</p>
                <button className={styles.btnMais} onClick={() => adicionarItemCarrinho(idProduto)}>+</button>
            </div>
        </div>
    )
}
