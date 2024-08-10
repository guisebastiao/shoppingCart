import styled, { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import * as colors from "../utils/colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: "Montserrat", sans-serif;
  }

  body {
    height: 100dvh;
    background: ${colors.themeColor};
  }

  #root {
    width: 100%;
    height: 100%;
  }

  .App {
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
    background: transparent;
  }

  input {
    background: transparent;
  }
`;

export const Container = styled.main`
  min-width: 360px;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
