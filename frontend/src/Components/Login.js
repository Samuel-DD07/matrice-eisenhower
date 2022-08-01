import axios from "axios"
import { createRef } from "react"

export default function Login(props){

    const monNom = createRef()
    const monMotdePass = createRef()
    const monMotdePass2 = createRef()

    function handleClick(){
        if (monNom.current.value.length > 0) {
            if (monMotdePass.current.value.length >= 10 ) {
                if (monMotdePass.current.value === monMotdePass2.current.value) {
                    axios.post('/users', {
                        name_user: monNom.current.value,
                        password: monMotdePass.current.value
                    })
                    .then(data => window.location.pathname = `/${data.data.element.id_user}` )
                    .catch(error => console.log(error))
                } else {
                    console.log("les mots de pass ne correspondent pas !")
                }
            } else {
                console.log("le mot de pass n'est pas assez long. 10 caractères minimun.")
            }
        } else {
            console.log("le nom n'est pas assez long. 10 caractères minimun.")
        }
        
    }

    return (
        <div>
            <h3>S'inscrire :</h3>
            <h3>Mon nom</h3>
            <input type="text" placeholder="Mon Nom" ref={monNom} required/>
            <h3>Mon mot de passe</h3>
            <input type="text" placeholder="Mon mot de pass" ref={monMotdePass} required/>
            <h3>Confirmer mon mot de passe</h3>
            <input type="text" placeholder="Mon mot de pass" ref={monMotdePass2} required/>
            <button onClick={() => handleClick()}>Valider</button>
        </div>
    )
}