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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #393c41;
    }
    html {
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        width: 100%;
        overflow-x: hidden;
        background-color: #000;
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    /* Ensure all form elements use the same font on Safari */
    input, textarea, select, button {
        font-family: Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    /* Safari-specific font rendering */
    @supports (-webkit-appearance: none) {
        * {
            font-family: Helvetica, sans-serif !important;
        }
        html, body {
            font-family: Helvetica, sans-serif !important;
        }
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