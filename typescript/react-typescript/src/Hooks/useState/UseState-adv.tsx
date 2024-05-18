import { log } from "console";
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

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // const changeFirstN = (e: any) => {
    //     setFirstName(e.target.value)
    // }
    // const changeE = (e: any) => {
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    // }
    // const changePassword = (e:any) => {
    //     setPassword(e.target.vlaue)
    // }
    const handleInputChange = (e:any,name:any) => {
        console.log(e.target.value,name)
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

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
            {/*form handling*/}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstName}
                    placeholder="enter your name"
                    onChange={handleInputChange}
                    {/*onChange={changeFirstN} */}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="enter your email"
                    // onChange={changeE}
                    onChange={handleInputChange}

                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="enter password"
                    onChange={changePassword}
                />
                <button>submit</button>
            </form>
            {/*after submiting the form the page will get refresh and the details entered will be erraised, to prevent that we need to create funtion prevent default  */}
        </div>)
}

export default Index;