import { useEffect } from "react"
import styled from "styled-components"
import logo from "../../assets/logo-future-eats-invert.png"
import { Header } from "../../components/Header/Header"

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
        <div>
            <Header />
            <Section>
                <img src={logo} alt="" style={{maxWidth:"128px", height:"100%"}}/>
                <br />
                <h1>LoginPage</h1>
            </Section>
        </div>
    )
}