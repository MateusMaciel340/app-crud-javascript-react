import "./style/Login.css";
import LoginLogo from "../../assets/logo-login.png";

const Login = () => {
    return (
        <div className="text-center">
            <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4"
                        src={LoginLogo}
                        alt="" width="200px" />
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control"
                            id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Digite seu email</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control"
                            id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingInput">Digite sua senha</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary"
                        type="submit">Logar</button>
                </form>
            </main>
        </div>
    );
}

export default Login;