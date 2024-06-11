import React from "react";
import { useNavigate } from "react-router-dom";

// useNavigate is a hook from react router dom 

function Home() {

    const navigate = useNavigate();

    const navigateToSuccessPage = () =>{
        navigate("/Success")
    }

    return (
        <div>
            Home
            <button onClick={navigateToSuccessPage}>submit form</button>
            </div>
    )
};

export default Home;