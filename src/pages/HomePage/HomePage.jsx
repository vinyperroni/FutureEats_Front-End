import { useContext, useEffect, useState } from "react"
import { TextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import { Search } from "@mui/icons-material"
import { HomeCards } from "../../components/HomeCards/HomeCards"
import { useNavigate } from "react-router-dom"
import { goToSearch } from "../../routes/Coordinator"
import { HomePageContainer, CategoryFilter, CardsRes } from "./styled"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import NavFooter from "../../components/NavFooter/NavFooter"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"

export default function HomePage() {
    useProtectedPage()
    const { restaurants, getRestaurants } = useContext(GlobalStateContext)
    const [category, setCategory] = useState("Todos")
    const navigate = useNavigate()

    useEffect(() => {
        getRestaurants()
    })


    let listCategory = ["Todos"]

    const listCategoryfiltered = restaurants && restaurants.map((r)=>{
        return r.category
    }).filter((r)=>{
        if(listCategory.includes(r)){
        return listCategory
        }else{
            return listCategory.push(r)
        }
    })
        
    const restaurantCategory = listCategory && listCategory.map((r) => {
        if(r === category){
            return (<p id="selected" onClick={() => onChangeCategory(r)}><b>{r}</b></p>)
        }else{
            return (<p onClick={() => onChangeCategory(r)}><b>{r}</b></p>)
        }        
    })

    const onChangeCategory = (e) => {
        setCategory(e)
    }

    return (
        <>
        <Header/>
        <HomePageContainer>
            <TextField
                onClick={() => { goToSearch(navigate) }}
                fullWidth
                id="outlined-search"
                placeholder="Restaurantes"
                type="search"
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                }}
            />
            <CategoryFilter>{restaurantCategory}</CategoryFilter>
            <CardsRes>{restaurants && restaurants.filter((r) => {                
                if (r.category === category) {
                    return true
                } else if (category === "Todos") {
                    return true
                }
            }).map(restaurant => (
                <HomeCards key={restaurant.id} restaurant={restaurant}  />
            ))}
            </CardsRes>
                
        </HomePageContainer>
        <NavFooter/>
        
        
        </>
    )
}