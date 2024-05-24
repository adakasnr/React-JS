import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

interface IsError{
    status : boolean,
    msg:string
}

function UseEffect1() {
    const [usersData, setUsersData] = useState<any[]>([])//
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<IsError>({ status: false, msg: "" })

    const fetchUsersData = async (apiURL: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            setUsersData(data);
            setIsLoading(false)
            
            setIsError({status: false,msg:""})
            if (response.status === 404){ 
                throw new Error("data not found")
            }
        } catch (error:any) {
            console.log(error.message);
            setIsLoading(false);
            setIsError({
                status:true,
                msg: error.message || "something went wrong, please try again!",})

                // 500 : something went wrong, please try again!"
                
        }

    }

    // true // --> 1 to infinity,-1 to infin.. , [], {}, true ,"dfghj",'sdf'
    // false // 0, flase, [].length {}.keys, '',""

    useEffect(() => { // call this call back function when isloading state is changed
    debugger
    }, [isLoading,usersData])

    useEffect(() => {
        
        fetchUsersData(URL)
    }, [])

    if (isLoading) { // loading is flase
        
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
            {
                usersData.length != 0 && <h1>useEffect example 1</h1>
            }
            

            <ul>
                { 
                // [{},{}]
                    usersData.map((eachUser,index) => {
                        const { name, email } = eachUser;
                        return (
                            <li key={index}>
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