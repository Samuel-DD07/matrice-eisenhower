import axios from "axios";
import { useState } from "react";
import styled from 'styled-components'

export default function Login(props){

    const [errorMessages, setErrorMessages] = useState({})

    const renderErrorMessage = (name) =>

    name === "isValid" ? 
        name === errorMessages.name && (
            <MessageTrue>{errorMessages.message}</MessageTrue>
        )
        :
        name === errorMessages.name && (
            <Message>{errorMessages.message}</Message>
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
            .then(() => console.log("ok"))
            // .then(() => window.location.pathname = `/tasks/${user_name.value}`)
            .catch(() => setErrorMessages({ name: "user_email", message: "Cet user existe déjà. Connectez vous !" }))
            }
    
        }

    return(
        <Content>
            <Formulaire onSubmit={handleSubmit}>
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
                </Formulaire>
        </Content>
    )
}

const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120vh;
`

const Formulaire = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 700px;
    width: 450px;
    background-color: #F1F1F1;
    border: 2px solid  #C1C1C1;

    & > div{
        display: flex;
        flex-direction: column;
        margin: 20px;
        width: 80%;

        & > label{
            font-size: 20px;
        }

        & > input{
            padding: 20px;
            font-size: 15px;
        }

        & > *{
            margin: 2px;
        }
    }
`

const Message = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: white;
    background-color: #E74C3C;
`

const MessageTrue = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: white;
    background-color: #58D68D;
`