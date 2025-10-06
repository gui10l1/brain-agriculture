import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  :root {
    --color-primary: #4CAF50;
    --color-secondary: #8BC34A;
    --color-accent: #F57C00;
    --color-background-light: #F5F5DC;
    --color-text-dark: #4E342E;
    --color-background-dark: #2E7D32;
  }
`;