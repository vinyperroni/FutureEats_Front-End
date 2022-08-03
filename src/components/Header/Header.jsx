import styled from 'styled-components';

const Section = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4em;
    border-bottom: solid 0.2em black;
`
const H1 = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    color: black;
`

export const Header = () => {
    return (
        <Section>
            <H1>Header</H1>
        </Section>
    );
}