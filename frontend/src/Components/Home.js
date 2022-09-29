import MyTask from './MyTask'
import styled from 'styled-components'
import background from '../assets/Illustration.png'
import Button from './Button'

export default function Home(props){

    if (!!document.cookie) {
        return (
            <MyTask />
        )
    } else {
        return (
            <Container>
                <Content>
                    <div>
                        <h1>Soyez 10X plus productif avec Matrice - Eisenhower !</h1>
                        <h3>Grâce à cette outil, augmenter votre productivité via notre sytème de priorité.</h3>
                        <p>Outil créé et développé par Samuel Dorismond.</p>
                    </div>
                    <Image /> 
                </Content>
                <Content>
                    <div>
                        <h1>Vous êtes ambitieux et vous voulez atteindre vos objectifs ?</h1>
                        <ul>
                            <h3>Monter un Business en ligne.</h3>
                            <h3>Apprendre une langue.</h3>
                            <h3>Apprendre un instrument de musique.</h3>
                            <h3>Avoir le corps de mes rêves.</h3>
                        </ul>
                    </div>
                    <Image /> 
                </Content>
                <Content>
                    <div>
                        <h1>Mais vous n'arrivez pas à les atteindre car vous avez trop tâches à faire.</h1>
                        <ul>
                            <h3>Faire le ménage.</h3>
                            <h3>S'occuper des enfants.</h3>
                            <h3>Gérer la paperasse.</h3>
                        </ul>
                    </div>
                    <Image /> 
                </Content>
                <Content>
                    <div>
                        <h1>Mais pas d'inquiétudes, Matrice-Einsenhower est là.</h1>
                        <h3>Grâce à son système de priorité, vous pourrez travailler sur les tâches les plus importantes. 
                            <br />Ainsi, éviter la procrastination et atteindre vos objectifs.</h3>
                    </div>
                    <Image /> 
                </Content>
                <ContentCenter>
                        <h1>Alors qu'est-ce que vous attendez pour essayer ?</h1>
                        <Button value="Essayer Matrice - Einsenhower !" links="/Login" type={true}/>
                </ContentCenter>
            </Container>
        )   
    }
}

const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
    
    & > div:nth-child(2n){
        flex-direction: row-reverse;
    }
    & > div:first-child{
        margin-top: 0px;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 80px);
    margin-top: 100px;
    width: 100%;

    & > div{
        width: 600px;
        z-index: 1;

        & > ul > h3::before{
                content: "➤ ";
            }
        }
`

const ContentCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    margin-top: 100px;
    width: 100%;
`

const Image = styled.img`
    background-color: red;
    width: 40%;
    height: 80vh;
`