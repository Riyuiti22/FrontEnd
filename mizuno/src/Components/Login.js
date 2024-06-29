import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonLiberado, setButtonLiberado] = useState(true)

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setUsername(e.target.value);
        validateButton(e.target.value, password);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validateButton(username, e.target.value);
    };
    const validateButton = (username, password) => {
        if (username && password.length >= 8) {
            setButtonLiberado(false)
        } else {
            setButtonLiberado(true)
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${username}\nPassword: ${password}`);
        navigate("/main")
    };


    return (
        <div className="App">{


            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-field">
                        <input type="email" placeholder="E-mail" onChange={handleEmailChange} required />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder='Senha' onChange={handlePasswordChange} required />
                        <FaLock className="icon" />
                    </div>

                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            lembre de mim
                            <a href="#">Esqueceu a senha ?</a>
                        </label>
                    </div>

                    <button type="submit" disabled={buttonLiberado}>Entrar</button>
                </form>

            </div>
        }
        </div>
    )
}

export default Login