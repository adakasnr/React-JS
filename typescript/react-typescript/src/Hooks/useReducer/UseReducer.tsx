import React, { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type ==="DELETE_PERSON") {
        const newPersons = state.data.filter((eachPerson)=>{
            return eachPerson.id !== action.payload;
        });
        return {
            ...state,
            data:newPersons,
            length: state.length -1,
        };
    }

    return state;
};

const UseReducer = () => {

    const initialState = {
        data: [
            { id: "123A", firstName: "siva", email: "adakasnr@gmail.com" },
            { id: "123B", firstName: "emma", email: "emma@gmail.com" }
        ]
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_PERSON',
            payload: id
        })
    };

    return (
        <div>
            <div>UseReducer</div>
            <h1>Curent users length:{state.length}</h1>
            {
                state.data.map((eachItem) => {
                    const { id, firstName, email } = eachItem
                    return <div key={id}>
                        <h3>{firstName}</h3>
                        <p>{email}</p>
                        <button onClick={() => handleDelete(id)}>delete</button>
                    </div>
                })
            }
        </div>

    )
}

export default UseReducer