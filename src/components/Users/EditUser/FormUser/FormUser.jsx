import { useEffect, useState } from "react";
import { ShowSearchUser, EditingUser } from "../../../../services/users/ApiUsers";

const FormUserEdit = () => {
    const [user, setUser] = useState([]);

    const [username, setUsername] = useState("");
    const [img, setImg] = useState("");
    const [message, setMessage] = useState("");

    const getSearchingUser = async () => {
        const response = await ShowSearchUser();

        setUsername(response[0].username);
        setImg(response[0].img);

        setUser(response);
    }

    const UpdatedUser = async (event) => {
        event.preventDefault();

        const data = { username: username, img: img };
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
                        htmlFor="password"
                        className="form-label">Foto</label>

                    <input type="text"
                        className="form-control"
                        id="foto"
                        aria-describedby="foto"
                        placeholder="Digite a url da sua foto"
                        onChange={(e) => setImg(e.target.value)}
                        value={img}
                        required />
                </div>

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