import { Link } from "react-router-dom";

import LogoHeader from "../../assets/crud.png";

const Header = () => {

    const Logout = () => {
        window.location.reload(localStorage.clear());
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <img src={LogoHeader} width={90} height={65} />

                <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active text-light"
                                aria-current="page" to="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link active text-light"
                                aria-current="page" to="/users">Users</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <Link to="/" onClick={Logout}>
                            <button className="btn btn-danger"
                                type="submit">
                                <i className="fa fa-sign-out"></i>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;