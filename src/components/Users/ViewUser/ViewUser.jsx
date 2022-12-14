import { useState, useEffect } from "react";

import { ShowSearchUser } from "../../../services/users/ApiUsers";

const ViewUser = () => {

    const [user, setUser] = useState([]);

    const getSearchingUser = async () => {
        const response = await ShowSearchUser();

        setUser(response);
    }

    console.log(user);

    useEffect(() => {
        getSearchingUser()
    }, []);

    return (
        <div className="container style-card-general">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="card">
                        {user.map((users, index) => (
                            <div className="card-body" key={index}>
                                <img src={users.img}/><hr/>
                                <h3>Id: {users.id}</h3><hr/>
                                <h3>Username: {users.username}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;