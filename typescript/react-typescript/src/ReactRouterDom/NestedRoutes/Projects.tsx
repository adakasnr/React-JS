import React from "react";
import { Link, Outlet } from "react-router-dom"

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <nav>
                <Link to='/NestedRoutes/Projects/featured'>Featured Projects</Link>
                <Link to='/NestedRoutes/Projects/new'>New Projects</Link>
            </nav>
            <Outlet />
        </div>
    )
};

// Outlet is a component used in react router, it serves as a placeholder or container for the child routes within a nested route structure. <Outlet /> component is where the content of the nested route will be rendered
export default Projects;