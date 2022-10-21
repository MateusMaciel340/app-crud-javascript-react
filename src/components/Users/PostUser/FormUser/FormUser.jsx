import { useState } from "react";

import { PostingUser } from "../../../../services/users/ApiUsers";

const FormUserPost = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [img, setImg] = useState("");
    const [message, setMessage] = useState("");

    const PostUser = async (event) => {
        event.preventDefault();
        const data = { username: username, password: password, img: img };
        const response = await PostingUser(data);

        setMessage(response);
    }

    return (
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                    <label
                        htmlFor="username"
                        className="form-label">Image</label>

                    <input type="text"
                        className="form-control"
                        id="img"
                        aria-describedby="img"
                        placeholder="Digite um imagem"
                        onChange={(e) => setImg(e.target.value)}
                        required />
                </div>

                <div className="col-md-6 style-card-general">
                    <label
                        htmlFor="username"
                        className="form-label">Username</label>

                    <input type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="username"
                        placeholder="Digite um username"
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>

                <div className="col-md-6 style-card-general">
                    <label
                        htmlFor="password"
                        className="form-label">Senha</label>

                    <input type="password"
                        className="form-control"
                        id="password"
                        aria-describedby="password"
                        placeholder="Digite uma senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>

                <div className="col-md-4 style-card-general">
                    <button
                        className="btn btn-primary"
                        onClick={PostUser}>Cadastrar</button>
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

export default FormUserPost;