import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function ShowTask(props){

    const {showTask, taskId, setShowTask} = props
    const [idTask, SetIdTask] = useState()

    function handleClick(event){
        event.preventDefault()
        setShowTask(false)
    }

    useEffect(() => {
        axios.get(`/tasks/OneTask/${taskId}`)
        .then(data => SetIdTask(data.data.element))
        .catch(error => console.log(error))
    }, [])

    return (
        <Content>
            <h1>Affichage de la tâche :</h1>
            <Retour onClick={handleClick}>Retour</Retour>
            {
                idTask ?
                <Container>
                    <h3>Nom de la tâche : <strong>{idTask.name_task}</strong></h3>
                    <h3>Description de la tâche : <strong>{idTask.description_task}</strong></h3>
                    <h3>Date de création : <strong>{idTask.date_creation_task}</strong></h3>

                    {idTask.is_important ?
                    <h3>Tâche importante.</h3>
                    :
                    ""}

                    {idTask.is_urgence ?
                    <h3>Tâche urgente.</h3>
                    :
                    ""}
                </Container>
                :
                "Chargement"
            }
        </Content>
    )
}

const Content = styled.section`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #F1F1F1;
    z-index: 9;
`

const Container = styled.div`
    width: 80%;
    
    & > h3 {
        color: gray;

        & > strong {
            color: black;
        }
    }
`

const Retour = styled.button`
    position: absolute;
    top: 100px;
    left: 50px;
    font-size: 20px;
    padding: 25px 20px;
    cursor: pointer;
    border: none;

    transition: 0.5s all ease;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1 );
        transition: 0.5s all ease;
    }
`