import styled from "styled-components";
import { secondaryColor, primaryColor } from "../../theme/colors";
import { Button } from "@mui/material";

export const ContainerPage = styled.div``;

export const AddressCart = styled.div`
  background-color: #eeeeee;
  height: 12vh;
  margin-top: -12px;

  p {
    margin-left: 12px;
    padding-bottom: -6px;
    height: fit-content;
    &:first-child {
      color: ${secondaryColor};
      padding-top: 2px;
    }
    &:last-child {
      color: black;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > p {
    font-size: 18px;
    margin-left: 12px;
    margin-top: 70px;
    width: 50vw;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 50vw;
    & > p {
    margin-right: 12px;
    margin-bottom: 0;
    &:first-child {
      font-size: 16px;
    }
    &:last-child {
      color: ${primaryColor};
    }
  }
`;

export const ContainerForm = styled.div`
 margin: 12px 12px;
 
`;


