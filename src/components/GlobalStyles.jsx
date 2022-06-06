import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Aldrich&family=Babylonica&family=Bellefair&family=Dangrek&family=Montserrat:ital,wght@1,100&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
`;

export default GlobalStyle;
