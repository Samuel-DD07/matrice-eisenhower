import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

export default function CreatedTask(props){

    const {refresh, setCreatedTask, setRefresh} = props
    const [errorMessages, setErrorMessages] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.get('/cookies')
        .then(data => {
            const {name_task, description_task, is_important, is_urgence} = document.forms[0]
            if (name_task.value.length > 0) {
                axios.post('/tasks', {
                    name_task: name_task.value,
                    description_task: description_task.value,
                    user_id: data.data.userId,
                    is_important: is_important.checked,
                    is_urgence: is_urgence.checked
                })
                .then(() => {
                    setRefresh(true)
                    setCreatedTask(false)
                })
                .catch(error => console.log(error))
            } else {
                setErrorMessages({ name: "name_task", message: "Saisir un titre à cette tâche !" })
            }
        })
        .catch(error => console.log(error))
    }

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <Message>{errorMessages.message}</Message>
    )
    
    return (
        <Content>
            <h1>Créer une tâche :</h1>
            <Retour onClick={() => setCreatedTask(false)}>Retour</Retour>

            <Formulaire onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name_task" placeholder="Votre Tâche :"/>
                    {renderErrorMessage("name_task")}
                </div>
                <div>
                    <textarea name="description_task" placeholder="La Description de la tâche :"></textarea>
                    {renderErrorMessage("description_task")}
                </div>
                <div>
                    <label>La tâche est importante ?</label>
                    <input type="checkbox" name="is_important" />
                    {renderErrorMessage("is_important")}
                </div>
                <div>
                    <label>La tâche est urgente ?</label>
                    <input type="checkbox" name="is_urgence" />
                    {renderErrorMessage("is_urgence")}
                </div>
                <div>
                    <Button type="submit" value="Valider la tâche !"/>
                </div>
            </Formulaire>
        </Content>
    )
}

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

const Formulaire = styled.form`
    & > div{
        font-size: 25px;
        color: gray;

        & >textarea:focus, input:focus{
            outline: none;
        }

        & > input[type=text], textarea{
            width: 80vw;
            font-size: 25px;
            border: none;
            background: none;
        }
        & > input[type=checkbox]{
            transform: scale(2);
            margin: 10px 20px;
        }
    }
`

const Button = styled.input`
    margin-top: 30px;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    color: white;
    background-color: #5499C7;
    border: 2px solid #1A5276;
    border-radius: 10px;
    transition: 1s all ease;
    cursor: pointer;

    &:hover{
        background-color: #A9CCE3;
        transition: 1s all ease;
    }
`

const Message = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F08080;
    color: white;
    font-size: 20px;
    width: 300px;
`