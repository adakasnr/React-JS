import React from "react";
import { useNavigate } from "react-router-dom";


function Success() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Successfully Submited</h1>
            <button onClick={() => navigate('/')}>Back to HomePage</button>
        </div>

    )
};

export default Success;