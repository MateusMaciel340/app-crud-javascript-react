import "./style/CardHome.css";
import { Link } from "react-router-dom";

const CardHome = (props) => {
    return (
        <div className="col-md-4 style-card-home text-center">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.logo} className="card-img-top" alt="image" />

                <div className="card-body">
                    <h4 className="card-text">
                        {props.title}
                    </h4>
                </div>

                <div className="card-body">
                    <Link to={props.routerCard}>
                        <button className="btn btn-dark">
                            Visualizar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardHome;