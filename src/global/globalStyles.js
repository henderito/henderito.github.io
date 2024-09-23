'use client'

import { createGlobalStyle } from "styled-components";
import { COLORS } from "./theme";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    line-height: calc(1em + 0.5rem);
  }

  html, body, #__next, main {
    min-height: 100%;

    // Adding this var for mobile devices -- minimum recommended tap surface is 44px-44px
    @media (pointer: coarse) {
      html {
        --min-tap-height: 44px;
      }
    }
  }

  main {
    background-color: ${COLORS.white};
  }

  body {
    ${
      "" /* line-height: 1.5;  Si no funciona el line-height con calc usar este  */
    }
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
