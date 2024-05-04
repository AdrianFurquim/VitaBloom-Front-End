import styles from "./Conteiner.module.css"

export default function Conteiner(props) {    

    return (
        <div className={`${styles.conteiner} ${styles[props.customClass]}`}>
            {props.children}
        </div>        
    )
}