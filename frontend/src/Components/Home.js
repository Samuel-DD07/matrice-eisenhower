import MyTask from './MyTask'
import styled from 'styled-components'
import background from '../assets/Illustration.png'

export default function Home(props){

    if (!!document.cookie) {
        return (
            <MyTask />
        )
    } else {
        return (
            <div>
                <Content>
                    <div>
                        <h1>Soyez plus Productif avec Matrice - Eisenhower !</h1>
                        <h3>Grâce à cette outil, augmenter votre productivité via notre sytème de priorité.</h3>
                    </div>
                    <Image></Image>
                </Content>
            </div>
        )   
    }
}

const Content = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 80px);
    padding-left: 50px;

    & > div{
        width: 600px;

        & > {
            h3{
                font-size: 30px;
            }
        }
    }
`

const Image = styled.span`
    display: block;
    width: 800px;
    height: 100%;
    background: url(${background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`