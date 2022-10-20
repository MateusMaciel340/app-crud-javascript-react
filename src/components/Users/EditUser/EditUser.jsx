import "../../CardHome/style/CardHome.css";

import FormUserEdit from "./FormUser/FormUser";

const EditUser = () => {
    return (
        <div className="container style-card-general">
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <FormUserEdit/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUser;