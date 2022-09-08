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
                        <h1>Bienvenue sur <br />Matrice - Eisenhower !</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</h3>
                    </div>
                    {/* <Image></Image> */}
                </Content>
            </div>
        )   
    }
}

const Content = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 100px);    

    & > div{
        width: 70vw;        
        z-index: 2;

        & > h3, p{
            width: 60%;    
        }
    }
`

const Image = styled.span`
    position: absolute;
    right: 2vw;
    bottom: 0px;
    background-image: url(${background});
    background-size: 100% 100%;
    background-position: center;
    height: calc(100vh - 100px);
    opacity: 0.75;
    width: 60vw;
`