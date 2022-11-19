import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, input, textarea, button {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme["primary-text"]};
        -webkit-font-smoothing: antialiased;
    }
`;
