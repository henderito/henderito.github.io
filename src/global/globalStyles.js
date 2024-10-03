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
    width: 100%;
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

  h1 {
    font-size: clamp(
      4.4rem,
      calc(5vw + 1rem),
      6rem
    );
  }

  h2 {
    font-size: clamp(
      3.2rem,
      calc(4vw + 1rem),
      4.4rem
    );
  }

  h3 {
    font-size: clamp(
      2.4rem,
      calc(3vw + 1rem),
      3.2rem
    );
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  article {
    font-size: 0.7rem;
  }

  #root, #__next {
    isolation: isolate;
  }

  @media (pointer: coarse) {
    html {
      --min-tap-height: 44px;
    }
  }
`;

export default GlobalStyles;
