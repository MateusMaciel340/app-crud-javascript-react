import "../../CardHome/style/CardHome.css";

import FormUserPost from "./FormUser/FormUser";

const PostUser = () => {
    return (
        <div className="container style-card-general">
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <FormUserPost/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostUser;