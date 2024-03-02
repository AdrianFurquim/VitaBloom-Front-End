import styles from "../projects/ProjectForm.module.css"

import { useState } from "react"

import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

export default function ServiceForm({handleSubmit, btnText, projectData}) {

    const [service, setService] = useState({})



    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                name="name"
                placeholder="Insira o nome do serviço"
                text="nome do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                name="cost"
                placeholder="Insira o valor total"
                text="Custo do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                name="description"
                placeholder="Descreva o serviço"
                text="Descrição do serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}