import { useEffect, useState } from "react";

import "../../../CardHome/style/CardHome.css";
import { ShowSearchUser, EditingUser } from "../../../../services/users/ApiUsers";

const FormUserEdit = () => {
    const [user, setUser] = useState([]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const getSearchingUser = async () => {
        const response = await ShowSearchUser();

        setUsername(response[0].username);
        setPassword(response[0].password);

        setUser(response);
    }

    const UpdatedUser = async (event) => {
        event.preventDefault();

        const data = { username: username, password: password };
        const response = await EditingUser(data);

        setMessage(response);
    }

    useEffect(() => {
        getSearchingUser()
    }, [])

    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-6">
                    <label
                        htmlFor="username"
                        className="form-label">Username</label>

                    <input type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="username"
                        placeholder="Digite um username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>

                <div className="col-md-6">
                    <label
                        htmlFor="password"
                        className="form-label">Password</label>

                    <input type="password"
                        className="form-control"
                        id="password"
                        aria-describedby="password"
                        placeholder="Digite uma senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required />
                </div>

                <div className="col-md-4 style-card-general">
                    <button
                        className="btn btn-primary"
                        onClick={UpdatedUser}>Atualizar</button>
                </div>

                <div className="col-md-12 style-card-general">
                    {message !== "" ? (
                        <div className="alert alert-secondary">
                            {message}
                        </div>
                    ) : ""}
                </div>
            </div>
        </div>
    );
}

export default FormUserEdit;