import { log } from "console";
import React, { useState, useEffect } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const UseEffect2 = () => {

    const [drinksData, setDrinksData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({status:false,msg:''})

    const fetchDrink = async (apiURL: string) => {
        setLoading(true)
        setIsError({status:false,msg:''})
        try {
            const response = await fetch(apiURL)
        const { drinks } = await response.json();
        setDrinksData(drinks)
        setLoading(false)
        setIsError({status:false, msg:""})
        if (!drinks){
            throw new Error("data not found")
        }
        } catch (error) {
            console.log(error);
            setLoading(false)
            setIsError({status:true,msg:'something went wrong'})
        }
    }

    useEffect(() => {
        const correctURL = `${URL}${searchTerm}`
        fetchDrink(correctURL)
    }, [searchTerm])

    return (
        <div>
            <h1>useEffect 2</h1>
            <h2>drinks count : {drinksData.length}</h2>
            <form>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search something new.."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <hr />
            {loading && !isError?.status && <h3>Loading...</h3>}
            {isError?.status && <h3 style={{color:'red'}}>{isError.msg}</h3>}
            {!loading && !isError?.status && ( 
                <ul className="cocktail-data">
                {
                    drinksData.map((eachDrink) => {
                        const { idDrink, strDrink, strDrinkThumb } = eachDrink;
                        return <li key={idDrink}>
                            <div>
                                <img src={strDrinkThumb} alt={strDrink} />
                            </div>
                            <div className="text">
                                <h3>{strDrink}</h3>
                            </div>
                        </li>
                    })
                }
            </ul>)
            }
        </div>
    )
}

export default UseEffect2;