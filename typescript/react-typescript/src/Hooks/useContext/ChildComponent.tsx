import React from "react";
import SubChildComponent from "./SubChildComp";

const ChildComponent = (props: any) => {
    return (
        <div>
            <h1>ChildComponent</h1>
            <SubChildComponent userDetails={props.userDetails} />
        </div>
    );
};

export default ChildComponent;