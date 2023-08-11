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
        list-style: none;
    }

    ::-webkit-scrollbar {
        background: ${({theme}) => theme.colors.bg.c1};
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.bg.c5};
        border-radius: 50px;    
        border: 2px solid ${({theme}) => theme.colors.bg.c1};
        border-top: 3px solid ${({theme}) => theme.colors.bg.c1};
        border-bottom: 3px solid ${({theme}) => theme.colors.bg.c1};
    }

    body {
        background-color: ${({theme}) => theme.colors.bg.main};
        width: 60%;
        max-width: 1200px;
        min-height: 100vh;
        height: 100%;
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

    .rotate90 {
        transform: rotate(90deg);
    }

    .rotate180 {
        transform: rotate(180deg);
    }

    .rotate270 {
        transform: rotate(270deg);
    }

`;