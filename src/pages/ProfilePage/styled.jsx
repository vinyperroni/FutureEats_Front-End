import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../theme/colors";

export const ProfilePageContainer = styled.div`
    margin: 0 auto;
    width: 100vw;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivUser = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    & button {
        margin-right: 16px;
    }
`;

export const DivAddress = styled.div`
    width: 100%;
    display: flex;
    background-color: #eeeeee;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    & > div > span:first-child {
        color: ${secondaryColor}
    }
    & button {
        margin-right: 16px;
    }
`;

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    gap: 10px;
`;

export const Divider = styled.hr`
    width: 93%;
    height: 1px;
    border: none;
    background-color: black;
`

export const DivHistory = styled.div`
    width: 100%;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    & > span {
        margin: 0px 16px;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 16px;
`

export const CardHistory = styled.div`
    border: 1px solid ${secondaryColor};
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > span:first-child {
        color: ${primaryColor};
    }
    & > span:nth-child(2) {
        font-size: 0.7em;
        
    }
    & > span:last-child {
        text-transform: uppercase;
        font-weight: bold;
    }
`;