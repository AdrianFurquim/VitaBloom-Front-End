import styles from "./ProdutoDencricao.module.css"

export default function ProdutoDencricao({nome}) {
    return(
        <>
            <h1>
                Esta é a descrição do produto {nome}
            </h1>
        </>
    )
}