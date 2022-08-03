import styled from "styled-components";

export const LoginFormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const LoginPageContainer = styled.div`
margin: 0 auto;
    width: 90vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
        width: 104px;
        height: 58px;
        margin: 68px 128px 16px;
        object-fit: contain;
    }
`