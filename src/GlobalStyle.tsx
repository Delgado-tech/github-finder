import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 16px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        border: none;
        background: none;
        outline: none;
    }

    body {
        background-color: ${({theme}) => theme.colors.bg.main};
        width: 60%;
        max-width: 1200px;
        height: 100vh;
        margin: 0 auto;
        padding: 0 3rem;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
    }
    
    a {
        color: inherit;
    }

    .font_display {
        font-family: 'Fira Sans', sans-serif !important;
    }

    .flip {
        transform: rotate(90deg);
    }

`;