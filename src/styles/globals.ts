import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --dark-blue: #333652;
  --gray: #E9EAEC;
  --light-blue: #90ADC6;
  --white: #FFFFFF;
  --red:  #F8635A;
  --green: #8FDA58;
}

* {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
