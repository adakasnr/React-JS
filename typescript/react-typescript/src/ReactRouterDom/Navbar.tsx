import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
                <NavLink to='/NestedRoutes/Projects'>Projects</NavLink>
            </nav>
        </div>
    )
};

// we can use Link insted of NavLink, but in NavLink it automatically creates active class to show which link is in active state, we can add CSS to that active link

export default Navbar;