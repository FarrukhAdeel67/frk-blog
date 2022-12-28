import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="not-found">
            <h3>Page not found</h3>
            <Link to="/">
            <p >Back to homepage...</p>
            </Link>
        </div>
    );
}
 
export default NotFound;