import React, { useState } from "react";

interface UserDetails {
    firstName: string
    lastName: string
    eamil: string
}

const ParentComponent = () => {

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

const ChildComponent = (props: any) => {
    return (
        <div>
            <h1>ChildComponent</h1>
            <SubChildComponent userDetails={props.userDetails} />
        </div>
    );
};


// const { age } = user

interface SubChildComponentProps {
    userDetails: UserDetails;
  }
const SubChildComponent:React.FC<SubChildComponentProps>= ({ userDetails }) => {
    return (
        <div>
            <h2>SubChildComponnet</h2>
            <div>name:{userDetails.firstName}</div>
            <div>name:{userDetails.lastName}</div>
            <div>name:{userDetails.eamil}</div>
        </div>
    )
}

export default ParentComponent;