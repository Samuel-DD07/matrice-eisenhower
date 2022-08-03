import { createRef } from "react"
const methods = require('../methods/My_fonction')

export default function Auth(props){

    const monNom = createRef()
    const monMotdePass = createRef()

    return (
        <div>
            <h3>Se connecter !</h3>
            <h3>Mon nom</h3>
            <input type="text" placeholder="Mon Nom" ref={monNom} required/>
            <h3>Mon mot de passe</h3>
            <input type="text" placeholder="Mon mot de pass" ref={monMotdePass} required/>
            <button 
                onClick={() => methods.auth(
                    monNom.current.value,
                    monMotdePass.current.value
                )}
            >Valider</button>
        </div>
    )
}