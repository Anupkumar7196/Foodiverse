import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom";
const Error = () => {
    const err = useRouteError();

    return (
        <div className="error-page">
            <div className="error-content">
                <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
                <h3>{err.status}: {err.statusText}</h3>
                <Link to="/">
                    <button className="home-btn">Go to Homepage</button>
                </Link>
            </div>
        </div>
    );
};
export default Error;