import "./style/TableUser.css";

const TableUser = () => {
    return (
        <table className="table table-hover text-center table-responsive">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Configuração</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">001</th>
                    <td>mateusmaciel340</td>
                    <td className="separation-button">
                        <button className="btn btn-secondary">
                            <i className="fa fa-eye"></i>
                        </button>

                        <button className="btn btn-primary">
                            <i className="fa fa-edit"></i>
                        </button>

                        <button className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableUser;