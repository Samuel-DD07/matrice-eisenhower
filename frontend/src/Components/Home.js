import MyTask from './MyTask'

export default function Home(props){
    if (!!document.cookie) {
        return (
            <MyTask />
        )
    } else {
        return (
            <div>
                <h1>Home</h1>
                <h3>Description du site web</h3>
                <p>Texte du site web</p>
            </div>
        )   
    }
}