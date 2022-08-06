import React from "react"
import { SignUpContainer } from "./styled"
import SignUpForm from "./SignUpForm"
import logo from "../../assets/logo-future-eats-invert-small.png"
import { Header } from "../../components/Header/Header";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";



export default function SignUpPage() { 
    useUnprotectedPage()
    
    return (
        <>
        <Header/>
        <SignUpContainer>           
            <img src={logo} alt="logo" />
            <p>Cadastrar</p>
            <SignUpForm/>
        </SignUpContainer>
        </>
    )
}