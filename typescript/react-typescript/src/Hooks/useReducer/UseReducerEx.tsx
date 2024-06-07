import React, { useReducer, useEffect } from "react";

const reducer = (state: any, action: { type: string; payload: any; }) => {
    if (action.type === "UPDATE_USERS_DATA") {
        return {
            ...state,
            isLoading: action.payload,
        }
    }
    return state;
}

const UseReducerEx = () => {

    const fetchUsersData = async (URL: RequestInfo | URL) => {
        dispatch({ type: "LOADING", payload: true })
        dispatch({ type: "ERROR", payload: { status: false, msg: "" } })
        try {
            const response = await fetch(URL)
            const data = await response.json()
            dispatch({ type: "UPDATE_USERS_DATA", payload: data })
            dispatch({ type: "LOADING", payload: false })
        } catch (error:any) {
            console.log(error);
            dispatch({ type: "LOADING", payload: false })
            dispatch({ type: "ERROR", payload: { status: true, msg: error.message } })
        }
    }

    useEffect(() => {
        fetchUsersData("https://jsonplaceholder.typicode.com/users");
    }, [])

    const initialState = {
        userData: [],
        isLoading: false,
        isError: { status: false, msg: '' },
    };
    const [state, dispatch] = useReducer(reducer, initialState)

    if (state.isLoading) {
        return <div>
            <h3>Loading...</h3>
        </div>
    }

    return (
        <div>
            <h1>UseReducerEx</h1>
            <h2>Users Information</h2>
            {
                state.usersData.map((eachUser: { id: any; email: any; name: any; }) => {
                    const { id, email, name } = eachUser;
                    return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <p>{email}</p>
                        <button>delete</button>
                        <button>edit</button>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default UseReducerEx;