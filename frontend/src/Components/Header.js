import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styled from 'styled-components'
import Button from "./Button";

export default function Header(props){

    const [myName, setMyName] = useState()

    axios.get('/cookies')
    .then(data => setMyName(data.data.userName))
    .catch(error => console.log(error))

    function handleClick(event){
        event.preventDefault()
        axios.get('/cookies/clear')
        .then(() => window.location.pathname = "/")
        .catch(error => console.log(error))
    }

    return (
        <Content>
            <Containt>
                <Link to="/">
                    <Logo>M-E</Logo>
                </Link>
                <Link to="/">Accueil</Link>                
                <Link to="/APropos">A propos</Link>                                
                <Link to="/Contact">Contact</Link>                                
            </Containt>
                {
                    myName ?
                    <ContaintButton>
                        Utilisateur : {myName}
                        <Button value="Déconnection" type={true} onClick={handleClick}/>
                    </ContaintButton>
                    :
                    <ContaintButton>
                        <Button value="Se Connecter !" links="/Auth" type={true}/>
                        <Button value="S'inscrire !" links="/Login" type={false}/>
                    </ContaintButton>
                }
        </Content>
    )
}

const Logo = styled.div`
    font-size: 30px;
`

const Content = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    height: 80px;
    padding: 0 100px;
    font-weight: 500;
    background-color: #F5F5F5;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media screen and (max-width: 1200px){
        
    }
`

const Containt = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 100%;

    & > *{
        padding: 10px;
        border-radius: 10px;
        transition: 0.5s all ease;
        &:hover{
            background-color: rgba(0, 0, 0, 0.1 );
            transition: 0.5s all ease;
        }
    }
`

const ContaintButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`