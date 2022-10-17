import { useEffect, useState } from "react";

import "./style/Login.css";
import LoginLogo from "../../assets/logo-login.png";

// Authentication
import { LoginUser } from "../../services/users/ApiUsers";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const LogInto = async (event) => {
        event.preventDefault();
        const data = { username: username, password: password };
        const response = await LoginUser(data);

        setMessage(response);
    }

    return (
        <div className="text-center">
            <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4"
                        src={LoginLogo}
                        alt="" width="200px" />
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    {message !== "" ? (
                        <div className="alert alert-secondary">
                            {message}
                        </div>
                    ) : ""}

                    <div className="form-floating">
                        <input type="text" className="form-control"
                            id="floatingInput" placeholder="name@example.com"
                            onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="floatingInput">Digite seu username</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control"
                            id="floatingPassword" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingInput">Digite sua senha</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary"
                        type="submit" onClick={LogInto}>Logar</button>
                </form>
            </main>
        </div>
    );
}

export default Login;