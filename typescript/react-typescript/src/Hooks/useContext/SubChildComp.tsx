import React, { useContext } from "react";
import { UserContext } from "./UserContext";


interface SubChildComponentProps {
    userDetails: UserDetails;
}
const SubChildComponent: React.FC<SubChildComponentProps> = () => {

    const data = useContext(UserContext)
    console.log(data);

    const {firstName,lastName,email} = data

    return (
        <div>
            <h2>SubChildComponnet</h2>
            <div>firstName:{firstName}</div>
            <div>lastName:{lastName}</div>
            <div>email:{email}</div>
        </div>
    )
}


export default SubChildComponent