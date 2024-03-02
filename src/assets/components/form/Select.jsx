import styled from "./Select.module.css"

export default function Select({ text, name, value, options,handleOnChange }) {
    return (
        <div className={styled.form_control}>
            <label htmlFor={name} >{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecioe uma opcao</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}