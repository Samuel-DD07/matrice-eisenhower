import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styled from 'styled-components'

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
        return;
    }

    return (
        <Content>
            <Containt>
                <Link to="/"><Logo>M-E</Logo></Link>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/Propos">A propos</Link>
                </li>                
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>                
            </Containt>
                {
                    myName ?
                    <ContaintButton>
                        <li>
                            {myName}
                        </li>
                        <Button>
                            <Link to="" onClick={handleClick}>Déconnection</Link>
                        </Button>
                    </ContaintButton>
                    :
                    <ContaintButton>
                        <Button>
                            <Link to="/Auth">Se Connecter</Link>
                        </Button>
                        <Button>
                            <Link to="/Login">S'inscrire</Link>
                        </Button>
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
    background-color: #F9F9F9;
`

const Containt = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 100%;

    & > *{
        padding: 10px;
        transition: 0.5s all ease;
        border-radius: 5px;

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
    width: 300px;
`

const Button = styled.li`
    text-align: center;
    width: 200px;
    padding: 10px;
    margin: 0px 10px;
    border-radius: 5px;
    transition: 0.5s all ease;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1 );
        transition: 0.5s all ease;
    }
    
    &:nth-child(2n){
        background-color: #F08080;
        border: 1px solid #B22222;
        color: white;

        &:hover{
            background-color: #B22222;
            transition: 0.5s all ease;
        }
    }
`