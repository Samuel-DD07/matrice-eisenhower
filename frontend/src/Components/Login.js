import axios from "axios";
import { useState } from "react";

export default function Login(props){

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div>{errorMessages.message}</div>
        )

    const handleSubmit = (event) => {
        event.preventDefault();
        const {user_name, user_email, user_password} = document.forms[0]
        axios.post('/users', {
            name_user: user_name.value,
            email_user: user_email.value,
            password_user: user_password.value
        })
        .then(data => console.log(data.data))
        }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Username </label>
                    <input type="text" name="user_name" required />
                    {renderErrorMessage("user_name")}
                </div>
                <div>
                    <label>Email </label>
                    <input type="email" name="user_email" required />
                    {renderErrorMessage("user_email")}
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" name="user_password" required />
                    {renderErrorMessage("user_password")}
                </div>
                <div>
                    <input type="submit" />
                </div>
                </form>
        </div>
    )
}