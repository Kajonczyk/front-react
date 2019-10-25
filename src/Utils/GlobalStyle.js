import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin:0px;
    font-size: 62.5%; 
}
*, *::before, *::after{
    box-sizing:border-box;
}
p, h1,h2,h3,h4{
    margin:0px;
}
body{
    height:100vh;
}
`;
export default GlobalStyle;
