import React from "react"; 
import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div>
            <Link to = "/"  className="error"  > 404 Error : something no work </Link>
        </div>
    )
};

export default ErrorPage;