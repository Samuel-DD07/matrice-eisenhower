import axios from "axios";
import { useState } from "react";

export default function Login(props){

    const [errorMessages, setErrorMessages] = useState({})

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div>{errorMessages.message}</div>
        )

    const handleSubmit = (event) => {
        event.preventDefault();
        const {user_name, user_email, user_password, user_password_2} = document.forms[0]
        if (user_password.value.length < 10) {
            setErrorMessages({ name: "user_password", message: "Votre mot de passe n'est pas assez long (10 caractères minimun)." })
            return;
        }
        if (user_password.value !== user_password_2.value) {
            setErrorMessages({ name: "user_password_2", message: "Vos mots de passes ne correspondent pas." })
        }
        else{
            axios.post('/users', {
                name_user: user_name.value,
                email_user: user_email.value,
                password_user: user_password.value
            })
            .then(() => window.location.pathname = `/tasks/${user_name.value}`)
            .catch(() => setErrorMessages({ name: "user_email", message: "Cet user existe déjà. Connectez vous !" }))
            }
    
        }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username </label>
                    <input type="text" name="user_name" />
                    {renderErrorMessage("user_name")}
                </div>
                <div>
                    <label>Email </label>
                    <input type="email" name="user_email" />
                    {renderErrorMessage("user_email")}
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" name="user_password" />
                    {renderErrorMessage("user_password")}
                </div>
                <div>
                    <label>Confirmer Password </label>
                    <input type="password" name="user_password_2" />
                    {renderErrorMessage("user_password_2")}
                </div>
                <div>
                    <input type="submit" />
                </div>
                </form>
        </div>
    )
}