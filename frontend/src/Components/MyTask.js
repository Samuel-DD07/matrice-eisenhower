import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreatedTask from './CreateTask'
import ShowTask from './ShowTask'
import UpdateTask from './UpdateTask'

export default function MyTask(props){

        const [myTask, setMyTask] = useState()
        const [refresh, setRefresh] = useState(true)
        const [showTask, setShowTask] = useState(false)
        const [createdTask, setCreatedTask] = useState(false)
        const [updateTask, setUpdateTask] = useState(false)
        const [taskId, setTaskId] = useState()

        function handleClickVoir(event){
            event.preventDefault()
            setShowTask(true)
            setTaskId(event.target.parentNode.parentNode.children[0].id)
        }

        function handleClickCreated(event){
            event.preventDefault()
            setCreatedTask(true)
        }
        
        function handleClickSuppr(event){
            event.preventDefault()
            axios.delete(`/tasks/${event.target.parentNode.parentNode.children[0].id}`)
            .then(() => setRefresh(true))
            .catch(error => console.log(error))
        }
        
        function handleClickEdit(event){
            event.preventDefault()
            setUpdateTask(true)
            setTaskId(event.target.parentNode.parentNode.children[0].id)
        }

        function mapConditional(tab, important_status, urgence_status){
            return tab.map((e, i) =>
            e.is_important === important_status && e.is_urgence === urgence_status ?
            <Tasks key={i}>
                <li id={e._id}><strong>{e.name_task}</strong></li>
                <ul>
                    <li onClick={handleClickVoir}>V</li>
                    <li onClick={handleClickSuppr}>S</li>
                    <li onClick={handleClickEdit}>M</li>
                </ul>
            </Tasks>
            :
            ""
        )}

        if (refresh) {
            axios.get(`/cookies`)
            .then(data => {
                axios.get(`/tasks/${data.data.userId}`)
                .then(dataTask => {
                    setMyTask(dataTask.data.tab)
                    setRefresh(false)
                })
                .catch(error => console.log(error))
            })
            .catch(error => console.log(error))   
        }
        


    return(
        <Content>
            <h1>Mes tâches :</h1>
            {
                myTask ?
                <Container>
                    <Div1> 
                        <h3>Les tâches à faire :</h3>
                        {mapConditional(myTask, true, true)}
                    </Div1>
                    <Div2> 
                        <h3>Les tâches à planifier : </h3>
                        {mapConditional(myTask, true, false)}
                    </Div2>
                    <Div3> 
                        <h3>Les tâches à déléguer :</h3>
                        {mapConditional(myTask, false, true)}
                    </Div3>
                    <Div4> 
                        <h3>Les tâches à éliminer :</h3>
                        {mapConditional(myTask, false, false)}
                    </Div4>
                </Container>
                :
                <Container>
                    <Div1> 
                        <h3>Les tâches à faire :</h3>                        
                    </Div1>
                    <Div2> 
                        <h3>Les tâches à planifier : </h3>                        
                    </Div2>
                    <Div3> 
                        <h3>Les tâches à déléguer :</h3>                        
                    </Div3>
                    <Div4> 
                        <h3>Les tâches à éliminer :</h3>                        
                    </Div4>
                </Container>
            }
            {
                createdTask ?
                <CreatedTask 
                    refresh={refresh} 
                    setCreatedTask={createdTask => setCreatedTask(createdTask)}
                    setRefresh={refresh => setRefresh(refresh)}
                />
                :
                <Button onClick={handleClickCreated}>Créer une nouvelle tâche !</Button>
            }        
            {
                showTask ?
                <ShowTask
                    taskId={taskId}
                    showTask={showTask} 
                    setShowTask={showTask => setShowTask(showTask)}
                />
                :
                ""
            }
            {
                updateTask ?
                <UpdateTask 
                    taskId={taskId}
                    updateTask={updateTask} 
                    setUpdateTask={updateTask => setUpdateTask(updateTask)}
                    refresh={refresh} 
                    setRefresh={refresh => setRefresh(refresh)}
                />
                :
                ""
            }
        </Content>
    )
}

const Content = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
`

const Container = styled.div`
    position: relative;
    display: grid;
    width: 70%;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    & > *{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        & > h3{
            text-align: center;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            margin-top: 0px;
            padding: 10px 0px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.5);
        }

        & > ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            width: 80%;

            & > ul{
                display: flex;
                justify-content: space-around;
                align-items: center;

                & > *{
                    padding: 0px 10px;
                    cursor: pointer;
                    transition: 0.5s all ease;

                    &:hover{
                    background-color: rgba(0, 0, 0, 0.1 );
                    transition: 0.5s all ease;
                }
                }
            }
        }
    }
`

const Tasks = styled.ul`
    background-color: rgba(255, 255, 255, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.5);
`

const Div1 = styled.div`
    background-color: rgb(245, 183, 177);
    grid-area: 1 / 1 / 2 / 2; 
`

const Div2 = styled.div`
    background-color: rgb(252, 243, 207);
    grid-area: 1 / 2 / 2 / 3;
`
const Div3 = styled.div`
    background-color: rgb(208, 236, 231);
    grid-area: 2 / 2 / 3 / 3;
`
const Div4 = styled.div`
    background-color: rgb(214, 219, 223);
    grid-area: 2 / 1 / 3 / 2;
`

const Button = styled.button`
    margin: 30px;
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