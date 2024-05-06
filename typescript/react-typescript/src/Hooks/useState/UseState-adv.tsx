import React, { useState } from "react";

const Index: React.FC = () => {
    const intialObj: { firstName: string; lastName: string; age:number } = {
        firstName: "emma",
        lastName: "watson",
        age:27 
    }

    const [data, setData] = useState(intialObj)
    const changeFirstName = (): void => {
        setData({
            ...data,
            firstName: "Siva",
        })
    }
    const changeLastName = (): void => {
        setData({
            ...data,
            lastName: "Adaka",
        })
    }
    const changeAge = (): void => {
        setData({
            ...data,
            age:28
        })
    }

    return (
        <div>
            <h1>my name is {data.firstName}</h1>
            <button onClick={changeFirstName}>change my firstname</button>
            <h1>my name is {data.lastName}</h1>
            <button onClick={changeLastName}>changeLastName</button>
            <h2>age {data.age}</h2>
            <button onClick={changeAge}>age </button>
        </div>)
}

export default Index;