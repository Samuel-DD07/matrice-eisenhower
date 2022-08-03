export default function Home(props){
    return(
        <div>
            <h1>Bienvenue sur la Matrice Eisenhower.</h1>
            <button onClick={() => window.location.pathname = '/Auth'}>Se connecter.</button>
            <button onClick={() => window.location.pathname = '/Login'}>S'inscrire.</button>
        </div>
    )
}