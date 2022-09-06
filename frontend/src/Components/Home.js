import MyTask from './MyTask'
import styled from 'styled-components'

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
                        <h1>Bienvenue sur Matrice - Eisenhower !</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
                    </div>
                </Content>
            </div>
        )   
    }
}

const Content = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 200px);

    & > div{
        width: 70vw;
    }
`