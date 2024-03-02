import styles from "./Input.module.css"; // Alterado o nome da variável para "styles"

export default function Input({ type, text, name, value, placeholder, handleOnChange }) {
    return (
        <div className={styles.form_control}> {/* Alterado de styled para styles */}
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    );
}
