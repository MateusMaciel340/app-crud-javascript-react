import CardHome from "../CardHome/CardHome";
import LogoUser from "../../assets/users-logo.png";

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <CardHome
                    logo={LogoUser}
                    title="Usuários"
                    routerCard="/users"
                />
            </div>
        </div>
    );
}

export default Home;