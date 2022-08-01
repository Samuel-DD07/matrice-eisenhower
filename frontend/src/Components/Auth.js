import axios from "axios"
import { createRef } from "react"

export default function Auth(props){

    const monNom = createRef()
    const monMotdePass = createRef()

    function handleClick(){
        const monNomValue = monNom.current.value
        const monMotdePassValue = monMotdePass.current.value
        axios.get(`/users/${monNomValue}`)
        .then(data => {
            if (!!data.data.element && data.data.element.password === monMotdePassValue) {
                window.location.pathname = `/${data.data.element.id_user}` 
            } else {
                console.log("Problème avec la paire identifiant / mot de passe.")
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <h3>Se connecter !</h3>
            <h3>Mon nom</h3>
            <input type="text" placeholder="Mon Nom" ref={monNom} required/>
            <h3>Mon mot de passe</h3>
            <input type="text" placeholder="Mon mot de pass" ref={monMotdePass} required/>
            <button onClick={() => handleClick()}>Valider</button>
        </div>
    )
}