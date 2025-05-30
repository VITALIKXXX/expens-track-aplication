import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background: #eee;
}
`;

export const theme = {
  background: {
    backgroundColors: "white"
  },
  colors: {
    primeriColors: "teal",
    white: "#ffffff",
  },
};