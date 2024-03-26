import { useState } from 'react';
import styles from "./MaisMenosBotao.module.css"

export default function MaisMenosBotao({ valor, quantidade }) {
    const [quantidadeItem, setQuantidadeItem] = useState(quantidade);
    const [valorItem, setValorItem] = useState(valor);
    const valorFixo = valor;


    

    function removeItem() {
        if (quantidadeItem <= 0) {
            setValorItem(0);
        }else{
            setQuantidadeItem(quantidadeItem - 1);
            var exemploQuant = quantidadeItem - 1;
            setValorItem(valorFixo * exemploQuant);
        }
    }

    function addItem() {
        setQuantidadeItem(quantidadeItem + 1);
        var exemploQuant = quantidadeItem + 1;
        setValorItem(valorFixo * exemploQuant);
    }

    return (
        <div className={styles.conteiner_total}>
            <div className={styles.valor}>
                <p>R$: {valorItem}</p>
            </div>
            <div className={styles.conteiner_opcao}>
                <button className={styles.btnMenos} onClick={removeItem}>-</button>
                <p>{quantidadeItem}</p>
                <button className={styles.btnMais} onClick={addItem}>+</button>
            </div>
        </div>
    )
}
