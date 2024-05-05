import { log } from "console";
import React, { useState } from "react";

const Increment:React.FC = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }
    return (
        <div className="Increment">
            <h1>hello hooks</h1>
            <button>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

// function Increment():React.FC {
//     const [count, setCount] = useState<number>(0)

//     const incrementCount = ():void => {
//         setCount (count+1)
//     }
//     return (
//         <div className="Increment">
//             <h1>hello hooks</h1>
//             <button>-</button>
//             <span>{count}</span>
//             <button onClick={incrementCount}>+</button>
//         </div>
//     )
// }

// Hooks are nothing but function
// to import Hooks we need to destructure
// Hooks should be used in components only, otherwise it will show error
export default Increment;