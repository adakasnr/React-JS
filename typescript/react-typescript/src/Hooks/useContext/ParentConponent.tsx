import React,{useState} from "react";
import ChildComponent from "./ChildComponent";

interface UserDetails {
    firstName: string
    lastName: string
    eamil: string
}

const ParentComponent1 = () => {

    const [userDetails, setUserDetails] = useState<UserDetails>({
        firstName: "emma",
        lastName: "waston",
        eamil: "eamil@email.com"
    })


    return (
        <div>
            <h1>useContext Parent Component</h1>
            <ChildComponent userDetails={userDetails} />
        </div>
    );
};

export default ParentComponent1;