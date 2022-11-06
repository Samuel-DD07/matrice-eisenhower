import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer(props){
    return (
        <Content>
            <h2>Site Web développé par Samuel Dorismond.</h2>
            <div>
                <ul><strong>Réseaux sociaux</strong>
                    <Link to="/"><li>Instagram</li></Link>
                    <Link to="/"><li>Mail</li></Link>
                    <Link to="/"><li>Linkedin</li></Link>
                </ul>
                <ul><strong>Liens</strong>
                    <Link to="/"><li>Accueil</li></Link>
                    <Link to="/"><li>A Propos</li></Link>
                    <Link to="/"><li>Se Connecter</li></Link>
                    <Link to="/"><li>S'inscrire</li></Link>
                </ul>
            </div>
        </Content>
    )
}

const Content = styled.footer`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 20px;

        & > *{
            margin: 50px;
        }
    }
`