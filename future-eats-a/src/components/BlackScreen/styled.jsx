import styled from "styled-components";

export const DivBlackScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: black;
  & img {
    width: 40vw;
    max-width: 300px;
  }
`;