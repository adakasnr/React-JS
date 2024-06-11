import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate()
    return (
        <div>
            <h1>404 NotFound</h1>
            <button onClick={()=>navigate('/')}>Back to Home Page</button>
        </div>
    )
};

export default NotFound;