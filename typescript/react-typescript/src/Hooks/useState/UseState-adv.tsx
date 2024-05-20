import { log } from "console";
import React, { useState } from "react";
import { text } from "stream/consumers";

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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [message, setMessage] = useState({
        text: "",
        id: ""
    })

    interface ListItem {
        text: string;
        id: string;
    }
    

    


    const [list, setList] = useState<ListItem[]>([])

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
    const handleInputChange = (e: any, name: any) => {
        console.log(e.target.name, name);
        if (name === "firstName") {
            setFirstName(e.target.value)
        } else if (name === "email") {
            setEmail(e.target.value)
        } else if (name === "password") {
            setPassword(e.target.value)
        }
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(firstName, email, password)
        const newTodo = {
            text: message.text,
            id: new Date().getTime().toString()
        };
        setList(list,)
        
    }

    const changeMessage = (e: any) => {
        setMessage({
            ...message,
            text: e.target.value
        })
    }
    //... 3 dots is spread operator - it copies all the keys and values of that object  
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
                    // {/*onChange={changeFirstN} */}
                    onChange={(e) => handleInputChange(e, "firstName")}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="enter your email"
                    // {/* onChange={changeE} */}
                    onChange={(e) => handleInputChange(e, "email")}

                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="enter password"
                    // {/*onChange={changePassword}*/}
                    onChange={(e) => handleInputChange(e, "password")}
                />
                <button>submit</button>
            </form>
            {/*after submiting the form the page will get refresh and the details entered will be erraised, to prevent that we need to create funtion prevent default  */}
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="enter some text"
                    value={message.text}
                    onChange={changeMessage}
                />
                <button type="submit">add</button>
            </form>
            <hr />
            <ul>
                {
                    list.map((eachItem) => {
                        const { text, id } = eachItem;
                        return <li key={id}>
                            <span>{text}</span>
                            <button>edit</button>
                            <button>delete</button>
                        </li>
                    })
                }
            </ul>
        </div>)
}

export default Index;