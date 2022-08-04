export default function Login(props){
    return (
        <div>
            <h1>S'inscrire au site web</h1>
            <form action="/users" method="POST">
                <h3>Votre Nom :</h3>
                <input type="text" name="name_user" placeholder="Votre Nom" required/>

                <h3>Votre Email :</h3>
                <input type="email" name="email_user" placeholder="Votre Email" required/>

                <h3>Votre Mot de Passe :</h3>
                <input type="password" name="password_user" minLength="10" placeholder="Votre Mot de Passe" required/>

                <br />
                <input type="submit" value="S'inscrire"/>
            </form>
        </div>
    )
}