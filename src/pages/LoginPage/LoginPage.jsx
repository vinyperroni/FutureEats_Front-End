import { useEffect } from "react"
import styled from "styled-components"
import logo from "../../assets/logo-future-eats-invert.png"
import { Header } from "../../components/Header/Header"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    border: solid red;
`
const Img = styled.img`
    width: 35%;
    height: 100%;
`
export default function LoginPage() {
    useEffect(() => {
        
    }, []);

    return (
        <div>
            <Header />
            <Section>
                <Img src={logo} alt="" />
                <br />
                <h1>LoginPage</h1>
            </Section>
        </div>
    )
}