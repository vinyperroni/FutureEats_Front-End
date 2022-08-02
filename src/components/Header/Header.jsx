import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4em;
    padding: 0.5em 1em;
    border-bottom: solid 0.2em black;
`

export const Header = () => {
    return (
        <Section>
            <h1>Header</h1>
        </Section>
    );
}