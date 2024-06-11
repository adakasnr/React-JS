import React from "react";
import { Link } from "react-router-dom"

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <nav>
                <Link to='/Projects/featured'>Featured Projects</Link>
                <Link to='/Projects/new'>New Projects</Link>
            </nav>
        </div>
    )
};

export default Projects;