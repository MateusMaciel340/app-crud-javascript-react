import "../CardHome/style/CardHome.css";

import TableUser from "../TableUser/TableUser";

const Users = () => {
    return (
        <div className="container style-card-general">
            <div className="row">
                <div className="col-md-8">
                    <h1>Usuários</h1>
                </div>
                <div className="col-md-4 text-center">
                    <button className="btn btn-primary">
                        Adicionar novo usuário
                    </button>
                </div>

                <hr/>

                <div className="col-md-12">
                    <TableUser/>
                </div>
            </div>
        </div>
    );
}

export default Users;