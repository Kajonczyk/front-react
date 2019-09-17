import React from "react";
import Data from "./Data";
import LoginPage from "./Components/LoginPage";
import GlobalStyle from "./Utils/GlobalStyle";
import theme from "./Utils/theme";
import { ThemeProvider } from "styled-components";
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          {/* <Data /> */}
          <LoginPage />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
