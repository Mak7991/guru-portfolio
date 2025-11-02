import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --teslaColor : #2D5460;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Helvetica, sans-serif;
        color: #393c41;
    }
    html, body {
        font-family: Helvetica, sans-serif;
    }
    body{
        width: 100%;
        overflow-x: hidden;
        background-color: #000;
        font-family: Helvetica, sans-serif;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    html {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`;

export default GlobalStyle