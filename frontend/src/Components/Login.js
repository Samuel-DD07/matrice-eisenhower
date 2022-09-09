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
            .then(() => {
                console.log("ok")
                setErrorMessages({ name: "isValid", message: "Inscription Réussie !" })
                window.location.pathname = "/"
            })
            .catch(() => setErrorMessages({ name: "user_email", message: "Cet user existe déjà. Connectez vous !" }))
            }
    
        }

    return(
        <Content>
            <Formulaire onSubmit={handleSubmit}>
            <h3>S'Inscrire :</h3>
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
                    <Button type="submit" />
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
    height: calc(100vh - 80px);
`

const Formulaire = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
    width: 30%;
    height: 80%;
    background-color: #F1F1F1;
    border: 2px solid  #E1E1E1;

    & > h3{
        text-align: center;
        font-size: 30px;
    }

    & > *{
        display: flex;
        flex-direction: column;
        width: 100%;
        
        & > *{
            height: 40px;
            font-size: 20px;
        }

        input {
            font-size: 20px;
        }
    }
`

const Button = styled.input`
    background-color: #F08080;
    border: 1px solid #B22222;
    color: white;
    transition: 0.5s all ease;

    &:hover{
            background-color: #B22222;
            transition: 0.5s all ease;
        }
`

const Message = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F08080;
    color: white;
`

const MessageTrue = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #58D68D;
    color: white;
`