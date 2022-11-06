import axios from "axios"
import { useState } from "react"
import styled from 'styled-components'

export default function Auth(props){

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
        event.preventDefault()
        const {user_email, user_password} = document.forms[0]
        if (user_password.value.length <= 0) {
            setErrorMessages({ name: "user_password", message: "Veuillez saisir votre mot de passe !"})
            return
        }
        if (user_email.value.length <= 0) {
            setErrorMessages({ name: "user_email", message: "Veuillez saisir votre email !"})
        } 
        else {
            axios.post('/users/auth', {
                email_user: user_email.value,
                password_user: user_password.value
            })
            .then(valid => {
                if (!!valid.data) {
                    setErrorMessages({ name: "isValid", message: "Connexion Réussie !"})
                    window.location.pathname = '/'
                } else {
                    setErrorMessages({ name: "valid_error", message: "Paire login/mot de passe incorrecte"})
                }
            })
            .catch(setErrorMessages({ name: "valid_error", message: "Paire login/mot de passe incorrecte"}))
            }
        }

    return (
        <Content>
            <Formulaire onSubmit={handleSubmit}>
                <h3>Se Connecter :</h3>
                <div>
                    <label>Votre Email :</label>
                    <input type="email" name="user_email" />
                    {renderErrorMessage("user_email")}
                </div>
                <div>
                    <label>Votre Mot de Passe :</label>
                    <input type="password" name="user_password" />
                    {renderErrorMessage("user_password")}
                </div>
                <div>
                    {renderErrorMessage("valid_error")}
                    {renderErrorMessage("isValid")}
                    <Button type="submit" />
                </div>
                </Formulaire>
        </Content>
    )
}

const Content = styled.section`
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
            height: 50px;
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