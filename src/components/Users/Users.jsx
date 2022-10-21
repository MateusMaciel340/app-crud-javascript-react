import { Link } from "react-router-dom";

import TableUser from "../TableUser/TableUser";

const Users = () => {
    return (
        <div className="container style-card-general">
            <div className="row">
                <div className="col-md-8">
                    <h1>Usuários</h1>
                </div>
                <div className="col-md-4 text-center">
                    <Link to="/post-users">
                        <button className="btn btn-primary">
                            Adicionar novo usuário
                        </button>
                    </Link>
                </div>

                <hr />

                <div className="col-md-12">
                    <TableUser />
                </div>
            </div>
        </div>
    );
}

export default Users;