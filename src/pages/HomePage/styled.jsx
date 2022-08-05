import styled from "styled-components";
import { primaryColor } from "../../theme/colors";


export const HomePageContainer = styled.main`
    margin: 0 auto;
    margin-top: 1em;
    width: 90vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

`

export const CategoryFilter = styled.div`
    display:flex;
    box-sizing: border-box;
    gap:10px;
    max-width: 400px;
    padding: 5px 10px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display:none;
    }
    & > p {
        background-color: white;
        box-sizing: border-box;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
    }
    #selected{
        color: ${primaryColor};
    }

`