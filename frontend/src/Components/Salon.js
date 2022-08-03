import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CreateOneTask from "./CreateOneTask"
import DeleteOneTask from "./DeleteOneTask"
import UpdateTask from "./UpdateTask"
import ShowTask from "./ShowTask"
const methods = require('../methods/My_fonction')

export default function Salon(props){

    const idUser = useParams()
    const [data, setData] = useState()
    let [showTask, setShowTask] = useState()
    let [change, setChange] = useState(false)
    let [update, setUpdate] = useState()
    let [deleteOne, setDeleteOne] = useState()

    if (change) {
        window.location.reload()
        change = false
    }

    useEffect(() => {
        axios.get(`/api/${idUser.idUser}`)
            .then(data => {
                setData(methods.sortMyData(data.data.element))
            })
    },[])

    return(
        <div>
            <h1>Salon</h1>
            <ul> <h3>Important et Urgent</h3>
                {methods.showTask(data, true, true, setUpdate, setDeleteOne, setShowTask)}
            </ul>
            <ul> <h3>Important et Non-Urgent</h3>
                {methods.showTask(data, true, false, setUpdate, setDeleteOne, setShowTask)}
            </ul>
            <ul> <h3>Non-Important et Urgent</h3>
                {methods.showTask(data, false, true, setUpdate, setDeleteOne, setShowTask)}
            </ul>
            <ul> <h3>Non-Important et Non-Urgent</h3>
                {methods.showTask(data, false, false, setUpdate, setDeleteOne, setShowTask)}
            </ul>
            <div>
                <CreateOneTask change={change} setChange={change => setChange(change)}/>
                <UpdateTask update={update} setUpdate={update => setUpdate(update)} change={change} setChange={change => setChange(change)} showTask={showTask}/>
                <DeleteOneTask update={update} deleteOne={deleteOne} setUpdate={deleteOne => deleteOne(deleteOne)} change={change} setChange={change => setChange(change)} showTask={showTask}/>
                <ShowTask setChange={change => setChange(change)} update={update} deleteOne={deleteOne} showTask={showTask} setShowTask={showTask => setShowTask(showTask)}/>
            </div>
        </div>
    )
}