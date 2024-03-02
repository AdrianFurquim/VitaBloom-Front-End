import { useLocation } from "react-router-dom";
import styled from "./Projects.module.css"

import Message from "../layout/Message";
import Conteiner from "../layout/Conteiner"
import LinkButton from "../layout/Linkbutton";
import Loading from "../layout/Loading";
import ProjectCard from "../projects/ProjectCard";

import { useState, useEffect } from "react";

export default function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {

        setTimeout(() => {


            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: { "content-type": "application/json" },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        }).then((resp) => resp.json())
            .then((data) => {
                setProjects(projects.filter((project) => project.id != id))
                setProjectMessage('Projeto removido com sucesso!')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styled.project_conteiner}>
            <div className={styled.title_conteiner}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>

            {message && <Message msg={message} type="sucess" />}
            {projectMessage && <Message msg={projectMessage} type="sucess" />}

            <Conteiner customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />)

                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length == 0 && (
                    <p>Nao ha projetos cadastrados</p>
                )}
            </Conteiner>
        </div>
    )
}