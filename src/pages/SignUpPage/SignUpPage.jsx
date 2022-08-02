import React from "react"
import { SignUpContainer } from "./styled"
import SignUpForm from "./SignUpForm"


export default function SignUpPage() {
    

    return (
        <SignUpContainer>
            <h1>Cadastro Usuário</h1>

            <SignUpForm/>
        </SignUpContainer>
    )
}