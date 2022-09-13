import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function UpdateTask(props){

    const {taskId, updateTask, setUpdateTask, refresh, setRefresh} = props
    const [idTask, SetIdTask] = useState()

    function handleSubmit(event){
        event.preventDefault()
        const {name_task, description_task, is_important, is_urgence} = document.forms[0]
        console.log(name_task.value, description_task.value, is_important.checked, is_urgence.checked)
        axios.put(`/tasks/${taskId}`, {
            name_task: name_task.value,
            description_task: description_task.value,
            is_important: is_important.checked,
            is_urgence: is_urgence.checked,
        })
        .then(() => {
            setRefresh(true)
            setUpdateTask(false)
        })
        .catch(error => console.log(error))
    }
    

    useEffect(() => {
        axios.get(`/tasks/OneTask/${taskId}`)
        .then(data => SetIdTask(data.data.element))
        .catch(error => console.log(error))
    },[])

    return (
        <Content>
            <h1>Modifier une tâche </h1>
            <Retour onClick={() => setUpdateTask(false)}>Retour</Retour>

            {
                idTask ?
                <Formulaire onSubmit={handleSubmit}>
                    <div>
                        <label>Tâche :</label>
                        <input type="text" name="name_task" defaultValue={idTask.name_task}/>
                    </div>
                    <div>
                        <label>Description :</label>
                        <input type="text" name="description_task" defaultValue={idTask.description_task}/>
                    </div>
                    <div>
                        <label>Importante :</label>
                        <input type="checkbox" name="is_important" defaultChecked={idTask.is_important}/>
                    </div>
                    <div>
                        <label>Urgente :</label>
                        <input type="checkbox" name="is_urgence" defaultChecked={idTask.is_urgence}/>
                    </div>
                    <div>
                        <Button type="submit" value="Modifier la tâche !"/>
                    </div>
                </Formulaire>
                :
                ""
            }
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