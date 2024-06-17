import React from "react";
import userData from "./userData";
import { Link } from "react-router-dom";

function Users() {
    console.log(userData);
    
    return (
        <div>
            <h1>Users</h1>
            {userData.map((eachUser: any) => {
                const { id, name, email } = eachUser;
                console.log(id);  // Print each ID to check uniqueness

                return (
                <Link key={id} to={`/user/${id}`} > 
                    <article >
                        <h3>{name}</h3>
                        <h5>{email}</h5>
                    </article>
                </Link>
                )
            })}
        </div>
    )
}

export default Users;