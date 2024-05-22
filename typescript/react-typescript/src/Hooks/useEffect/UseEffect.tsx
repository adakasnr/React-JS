import React, { useEffect, useState } from "react";

const Final = () => {
    const [count, setCount] = useState(0)
    const [toggle,setToggle] = useState(true)
    const [pageWidth,setPageWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize",()=>{
            setPageWidth(window.innerWidth)
        })
        console.log("hello i am coming from useEffect");
    },[count,toggle]);

    return (
        <div>
            <h1>learn useEffect</h1>
            <h1 onClick={()=>setToggle(!toggle)}>{toggle ? "open" : "close"}</h1>
            <h1>{pageWidth}</h1>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                +
            </button>
        </div>
    )
}

export default Final;