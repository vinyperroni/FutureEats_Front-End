import { TextField , InputAdornment } from "@mui/material"
import React from "react"
import { SearchPageContainer } from "./styled"
import lupa from "../../assets/search.png"
import {Header} from "../../components/Header/Header"

export default function SearchPage() {
    return (
        <>
        <Header/>
        <SearchPageContainer>
            <TextField
            id="input-with-icon-textfield"
            placeholder="Busca"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <img src={lupa} alt="lupa" />
                </InputAdornment>
            ),
            }}
        />
            
        </SearchPageContainer>
        </>
   )
}