import React, { useState, useEffect } from "react";
import { GlobalStateContext} from "./GlobalStateContext";
import axios from "axios";
import { Headers, ListRestaurantGET } from "../api/manifest";


const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState()

        
    const getRestaurants = () => {
        axios
        .get( ListRestaurantGET, {headers: Headers})
    .then((res)=>{
    setRestaurants(res.data.restaurants)
    })
    .catch((err)=>{
        console.log(err.message)
    })
    }
    useEffect(()=>{
        getRestaurants()
    },[])
    return (
        <GlobalStateContext.Provider value = {{restaurants}}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState