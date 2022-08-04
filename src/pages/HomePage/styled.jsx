import styled from "styled-components";
import HomePage from "./HomePage";


export const HomePageContainer = styled.main`
    margin: 0 auto;
    width: 90vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const CategoryFilter = styled.div`
    display:flex;
    gap:10px;
    max-width: 400px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display:none;
    }
    & > p {
        background-color: grey;
        padding: 5px 10px;
    }

`