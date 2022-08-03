import { useEffect } from "react"
import styled from "styled-components"
import logo from "../../assets/logo-future-eats-invert-small.png"
import { Header } from "../../components/Header/Header"
import LoginForm from "./LoginForm"
import { LoginPageContainer } from "./styled"

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
    useEffect(() => {
        
    }, []);

    return (
        <>
        <LoginPageContainer>
            <img src={logo} alt="logo" />
            <p>Entrar</p>
            <LoginForm/>

        </LoginPageContainer>
        </>
    )
}