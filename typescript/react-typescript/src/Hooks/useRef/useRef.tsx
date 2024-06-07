import React, { useState, useRef, useEffect } from "react";

// useRef is to check how many times a component gets render

const UseRef = () => {
    const [firstName, setFirstName] = useState("")
    const renderCount = useRef(0)
    const inputDom = useRef("");

    useEffect(() => {
        renderCount.current = renderCount.current+1
    });

    const focus = () =>{
        inputDom.current.focus();
    };

    return (
        <>
            <h1>UseRef</h1>
            <input ref={inputDom} type="text" name="" id="" onChange={(e) => { setFirstName(e.target.value) }} />
            <h5>Typing: {firstName}</h5>
            <h5>component render { renderCount.current }</h5>
            <button onClick={focus}>type something</button>
        </>

    )
}




export default UseRef