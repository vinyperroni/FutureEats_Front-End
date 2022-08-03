import React from "react"
import { SignUpAddresContainer } from "./styled"
import AdressForm from "../../components/AddressForm/AddressForm";
import logo from "../../assets/logo-future-eats-invert-small.png"
import { Header } from "../../components/Header/Header";


export default function SignUpAddressPage() {   

    return (
        <>
        <Header/>
        <SignUpAddresContainer>            
            <p>Meu endereço</p>
            <AdressForm/>

        </SignUpAddresContainer>
        </>
    )
}