import { useContext, useEffect, useState } from "react"
import { TextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import { Search } from "@mui/icons-material"
import axios from "axios"
import { Headers, ListRestaurantGET } from "../../api/manifest"
import { HomeCards } from "../../components/HomeCards/HomeCards"
import { useNavigate } from "react-router-dom"
import { goToSearch } from "../../routes/Coordinator"
import { HomePageContainer, CategoryFilter } from "./styled"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"



export default function HomePage() {
    const {restaurants} = useContext(GlobalStateContext)
    const navigate = useNavigate()          

    const restaurantCategory = restaurants && restaurants.map((r)=>{
        return(<p>{r.category}</p>)
    })

    // const filterRestaurantC = restaurants && restaurants.filter((r)=>{
    //     switch (r.category) {
    //         case value:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // })
    return( 
    <HomePageContainer>
        <h3>FutureEats</h3>
        <TextField
            onClick={()=> {goToSearch(navigate)}}
            id="outlined-search"
            placeholder="Restaurantes"
            type="search"
            InputProps={{
                startAdornment: <InputAdornment position="start"><Search/></InputAdornment>,
              }}
            />
            <CategoryFilter>{restaurantCategory}</CategoryFilter>
            {restaurants && restaurants.map(restaurant => (
                <HomeCards key = {restaurant.id} restaurant = {restaurant}/>
            ))  }
    </HomePageContainer>
    )
}