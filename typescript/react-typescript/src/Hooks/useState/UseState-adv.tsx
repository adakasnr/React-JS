import React, { useState } from "react";

const Index: React.FC = () => {
    const intialObj: { firstName: string; lastName: string; age: number } = {
        firstName: "emma",
        lastName: "watson",
        age: 27
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
            age: 28
        })
    }

    const [showdata, setShowData] = useState(false)
    const handleChange = () => {
        setShowData(!showdata);
    };

    return (
        <div>
            <h1>my name is {data.firstName}</h1>
            <button onClick={changeFirstName}>change my firstname</button>
            <h1>my name is {data.lastName}</h1>
            <button onClick={changeLastName}>changeLastName</button>
            <h2>age {data.age}</h2>
            <button onClick={changeAge}>age </button>
            {/*Conditional Rendering*/}
            <button onClick={handleChange}>{showdata ? "hide" : "show"}</button>
            {showdata && (
                <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellat sed adipisci rem illo cum cumque debitis autem architecto eligendi, et nostrum voluptas quaerat. Ut praesentium doloribus at illum libero.
                </div>
            )}
        </div>)
}

export default Index;