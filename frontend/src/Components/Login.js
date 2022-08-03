import axios from "axios"
import { createRef } from "react"
const methods = require('../methods/My_fonction')

export default function Login(props){

    const monNom = createRef()
    const monMotdePass = createRef()
    const monMotdePass2 = createRef()

    return (
        <div>
            <h3>S'inscrire :</h3>
            <h3>Mon nom</h3>
            <input type="text" placeholder="Mon Nom" ref={monNom} required/>
            <h3>Mon mot de passe</h3>
            <input type="text" placeholder="Mon mot de pass" ref={monMotdePass} required/>
            <h3>Confirmer mon mot de passe</h3>
            <input type="text" placeholder="Mon mot de pass" ref={monMotdePass2} required/>
            <button 
                onClick={() => methods.login(
                    monNom.current.value,
                    monMotdePass.current.value,
                    monMotdePass2.current.value
                )}
            >Valider</button>
        </div>
    )
}