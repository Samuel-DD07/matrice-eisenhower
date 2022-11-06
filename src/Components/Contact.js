import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Contact(props){
    return (
        <Content>
            <h1>Contact</h1>
            <ul>
                <Link to="/"><li>Instagram</li></Link>
                <Link to="/"><li>Mail</li></Link>
                <Link to="/"><li>Linkedin</li></Link>
            </ul>
        </Content>
    )
}

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);

    ul{
        display: flex;
        justify-content: space-between;
        width: 400px;

        & > *{
            font-size: 20px;
            padding: 10px;
            transition: 0.5s all ease;

            &:hover{
                background-color: rgba(0, 0, 0, 0.1 );
                transition: 0.5s all ease;
            }
        }
    }
`