import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`
     
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Overpass", sans-serif;
     }

     :root {
        font-size: 62.5%;
     }

     body {
        font-size: 1.6rem;
        background: ${props  => theme.homeBackgroud};
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
     }

`