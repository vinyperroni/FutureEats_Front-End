import { useEffect } from "react"
import styled from "styled-components"
import logo from "../../assets/logo-future-eats-invert-small.png"
import LoginForm from "./LoginForm"
import { LoginPageContainer } from "./styled"
import { Button } from "@mui/material"
import { goToSignUp } from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom"


const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: solid red;
`

export default function LoginPage() {
    const navigate = useNavigate()

    useEffect(() => {
        
    }, []);



    return (
        <>
        <LoginPageContainer>
            <img src={logo} alt="logo" />
            <p>Entrar</p>
            <LoginForm/>
            <Button            
            sx={{
                textTransform: "none",
                color: "black",
                padding: "1em",
                boxSizing: "border-box"
            }}
            onClick={() => goToSignUp(navigate)}
            >Não Possui Cadastro? Clique aqui</Button>
        </LoginPageContainer>
        </>
    )
}