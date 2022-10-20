import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style/TableUser.css";
import { ShowUser } from "../../services/users/ApiUsers";

const TableUser = () => {

    const [user, setUser] = useState([]);

    const getShowUser = async () => {
        const response = await ShowUser();

        setUser(response);
    }

    useEffect(() => {
        getShowUser()
    }, []);

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
                {user.map((user, index) => (
                    <tr key={index}>
                        <th scope="row">00{index + 1}</th>
                        <td>{user.username}</td>
                        <td className="separation-button">
                            <Link to={`/users/${user.id}`}>
                                <button className="btn btn-secondary">
                                    <i className="fa fa-eye"></i>
                                </button>
                            </Link>

                            <Link to={`/edit-users/${user.id}`}>
                                <button className="btn btn-primary">
                                    <i className="fa fa-edit"></i>
                                </button>
                            </Link>

                            <button className="btn btn-danger">
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableUser;