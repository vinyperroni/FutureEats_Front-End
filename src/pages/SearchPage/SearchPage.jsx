import { TextField , InputAdornment } from "@mui/material"
import React, { useState } from "react"
import { SearchPageContainer } from "./styled"
import lupa from "../../assets/search.png"
import {Header} from "../../components/Header/Header"
import { HomeCards } from "../../components/HomeCards/HomeCards"
import { useContext } from "react"
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"


export default function SearchPage() {
    useProtectedPage()
    const {restaurants} = useContext(GlobalStateContext)
    const [search, setSearch] = useState("")

    const onSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
        <Header/>
        <SearchPageContainer>
            <TextField
            color="secondary"
            autoFocus
            id="input-with-icon-textfield"
            value={search}
            onChange={onSearch}
            placeholder="Busca"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <img src={lupa} alt="lupa" />
                </InputAdornment>
            ),
            }}
            />
            {search === "" 
            ? <p>Busque por nome de restaurante</p> 
            : restaurants && restaurants.filter(restaurant => {
                return restaurant.name.toLowerCase().includes(search.toLowerCase())
            }).map(restaurant => {
                return <HomeCards restaurant={restaurant} />
            })}
            
            
        </SearchPageContainer>
        </>
   )
}