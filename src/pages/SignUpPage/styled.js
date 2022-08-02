import styled from "styled-components";

export const SignUpContainer = styled.div`
    width: 90vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    & > img{
        width: 104px;
        height: 58px;
        margin: 24px 128px 16px;
        object-fit: contain;
    }
    & > p {
        width: 296px;
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: var(--black);
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
`