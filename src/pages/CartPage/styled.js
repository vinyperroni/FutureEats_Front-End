import styled from "styled-components";
import { secondaryColor, primaryColor } from "../../theme/colors";


export const ContainerPage = styled.main`
  margin: 0 16px;
  max-width: 450px;
  & > p {
    text-align: center;
  }
`;

export const AddressCart = styled.div`
  background-color: #eeeeee;
  height: 11vh;
  margin: 0 -16px 0 -16px;
  max-width: 450px;
  p {
    margin: 0 0 0 16px;
    height: fit-content;
    &:first-child {
      color: ${secondaryColor};
      padding-top: 18px;
    }
    &:last-child {
      color: black;
      margin-top: 8px;
      padding-bottom: 4px;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > p {
    text-align: right;
    font-size: 16px;
    margin-bottom: -2px;
    width: 100%;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  & > p {
    margin-bottom: 0;
    &:first-child {
      font-size: 18px;
    }
    &:last-child {
      color: ${primaryColor};
    }
  }
`;

export const ContainerForm = styled.form`
  margin: 12px 0;
`;

export const LineForm = styled.hr`
  width: 100%;
  margin-top: -6px;
  background-color: black;
  border-top: 1px solid black;
`;
