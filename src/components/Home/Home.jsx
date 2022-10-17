import { Link } from "react-router-dom";

const Home = () => {

    const Logout = () => {
        window.location.reload(localStorage.clear());
    }

    return (
        <div>
            <Link to="/"
                onClick={Logout}>Sair</Link>
        </div>
    );
}

export default Home;