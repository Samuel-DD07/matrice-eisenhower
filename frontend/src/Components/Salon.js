import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CreateOneTask from "./CreateOneTask"

export default function Salon(props){

    const idUser = useParams()
    const [data, setData] = useState()
    let [change, setChange] = useState(false)

    if (change) {
        window.location.reload()
        change = false
    }

    function sortMyData(obj){
        obj.sort((a, b) => {
            return b.Importance_task - a.Importance_task || b.Urgent_task - a.Urgent_task;
        })
        return obj
    }

    function filterMyData(obj, importance, urgence){
        return obj.filter(function(e){
            return e.Importance_task === importance && e.Urgent_task === urgence
        })
    }

    useEffect(() => {
        axios.get(`/api/${idUser.idUser}`)
            .then(data => {
                setData(sortMyData(data.data.element))
            })
    },[])

    return(
        <div>
            <h1>Salon</h1>
            <ul> <h3>Important et Urgent</h3>
                {data ? 
                filterMyData(data, true, true)
                    .map((e, i) =>
                        <li key={i}>
                            <p>{e.name_task}</p>
                            <p>Modifier</p>
                            <p>Supprimer</p>
                        </li>
                    ) 
                    : 
                "En Attente..."}
            </ul>
            <ul> <h3>Important et Non-Urgent</h3>
                {data ? 
                filterMyData(data, true, false)
                    .map((e, i) =>
                        <li key={i}>
                            <p>{e.name_task}</p>
                        </li>
                    ) 
                    : 
                "En Attente..."}
            </ul>
            <ul> <h3>Non-Important et Urgent</h3>
                {data ? 
                filterMyData(data, false, true)
                    .map((e, i) =>
                        <li key={i}>
                            <p>{e.name_task}</p>
                        </li>
                    ) 
                    : 
                "En Attente..."}
            </ul>
            <ul> <h3>Non-Important et Non-Urgent</h3>
                {data ? 
                filterMyData(data, false, false)
                    .map((e, i) =>
                        <li key={i}>
                            <p>{e.name_task}</p>
                        </li>
                    ) 
                    : 
                "En Attente..."}
            </ul>
            <div>
                <CreateOneTask change={change} setChange={change => setChange(change)}/>
            </div>
        </div>
    )
}