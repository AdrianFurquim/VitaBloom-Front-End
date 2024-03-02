import styled from "./SubmitButton.module.css"

export default function SubmitButton({ text }) {
    return (
        <div >
            <button className={styled.btn}>{text}</button>
        </div>
    )
}