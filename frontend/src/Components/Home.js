import Auth from "./Auth";
import Login from "./Login";

export default function Home(props){
    return(
        <div>
            <h1>Bienvenue sur la Matrice Eisenhower.</h1>
            <Auth />
            <Login />
        </div>
    )
}