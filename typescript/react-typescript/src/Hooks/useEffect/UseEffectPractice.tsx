import { url } from "inspector";
import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function UseEffect1() {

    
    const [usersData, setUsersData] = useState<any[]>([])//
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState({ status: false, msg: "" })

    const fetchUsersData = async (apiURL: string) => {
        setLoading(true)
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            setUsersData(data)
            setLoading(false)
            setIsError({status: false,msg:""})
            if (response.status === 404){
                throw new Error("data not found")
            }
        } catch (error:any) {
            console.log(error.message);
            
            setLoading(false)
            setIsError({
                status:true,
                msg: error.message || "something went wrong, please try again!",})
        }

    }

    useEffect(() => {
        fetchUsersData(URL)
    }, [])

    if (loading) {
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }

    if (isError?.status) {
        return(
            <div>
                <h3 style={{color:"red"}}>{isError?.msg}</h3>
            </div>
        )
    }

    return (
        <div>
            <h1>useEffect example 1</h1>

            <ul>
                {
                    usersData.map((eachUser) => {
                        const { id, name, email } = eachUser
                        return (
                            <li key={id}>
                                <div>{name}</div>
                                <div>{email}</div>
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default UseEffect1;