import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Apropos(props){
    return (
        <Content>
            <h1>A propos de moi</h1>
            <div>
                <h3>Salut tout le monde.<br /><br />
                    Je m'appelle Samuel Dorismond et je suis étudiant et développeur.
                    <br />
                    Merci d'utiliser mon outil, Matrice-Eiseinhower.
                    <br /><br />
                    Vous pouvez trouvez mes autres projets sur mon site web : <a href="https://samuel-dorismond.herokuapp.com">Samuel-Dorismond.fr</a>
                </h3>
            </div>
        </Content>
    )
}

const Content = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 100px);
    height: 100%;

    & > div {
        width: 50%;
    }
`