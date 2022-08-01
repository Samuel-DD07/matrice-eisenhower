import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Salon(props){

    const idUser = useParams()
    const [data, setData] = useState()

    function sortMyData(obj){
        obj.sort((a, b) => {
            return b.Importance_task - a.Importance_task || b.Urgent_task - a.Urgent_task;
        });
        return obj
    }

    function filterMyData(obj, importance, urgence){
        const objFilter = obj.filter(function(e){
            return e.Importance_task === importance && e.Urgent_task === urgence
        })
        return objFilter
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
                            <p>{e.date_creation_task}</p>
                            <p>{e.description_task}</p>
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
                            <p>{e.date_creation_task}</p>
                            <p>{e.description_task}</p>
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
                            <p>{e.date_creation_task}</p>
                            <p>{e.description_task}</p>
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
                            <p>{e.date_creation_task}</p>
                            <p>{e.description_task}</p>
                        </li>
                    ) 
                    : 
                "En Attente..."}
            </ul>
        </div>
    )
}